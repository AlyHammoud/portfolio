<template>
  <div class="testimonial">
    <div class="title">
      <h1>Client Testimonial</h1>
    </div>
    <div class="reviews">
      <swiper
        :slides-per-view="1"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :pagination="{ clickable: true }"
        :free-mode="true"
        :modules="modules"
        class="custom-swiper"
      >
        <swiper-slide>
          <div class="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis repellendus et, incidunt voluptas nemo tempore
              placeat eos numquam, magnam, quos suscipit! Aliquam, adipisci
              consequuntur libero rem soluta ducimus omnis.
            </p>
            <div class="contact">
              <div class="contact-image">
                <img src="https://picsum.photos/200/202" alt="" />
              </div>
              <div class="contact-info">
                <p>Jacson Miller</p>
                <p>jacson@example.com</p>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="card">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              perspiciatis repellendus et, incidunt voluptas nemo tempore
              placeat eos numquam, magnam, quos suscipit! Aliquam, adipisci
              consequuntur libero rem soluta ducimus omnis.
            </p>
            <div class="contact">
              <div class="contact-image">
                <img src="https://picsum.photos/200/202" alt="" />
              </div>
              <div class="contact-info">
                <p>Jacson Miller</p>
                <p>jacson@example.com</p>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
// import Swiper from "swiper/bundle";

// Import Swiper styles
import "swiper/css";
// import "swiper/swiper-bundle.css";

const modules = ref([Autoplay, Pagination, Navigation, FreeMode]);

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss" scoped>
.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .title {
    font-size: 1.4em;
    margin-bottom: 30px;

    @media screen and (max-width: 740px) {
      font-size: 1.1em;
    }

    @media screen and (max-width: 500px) {
      font-size: 0.8em;
      font-weight: 900;
    }

    h1 {
      text-align: center;
    }
  }

  .reviews {
    background-color: rgba(238, 188, 155, 0.1);
    width: 70%;
    display: flex;
    border-radius: 5px;
    padding: 30px 0;
    margin: 0 auto;
    position: relative;

    .custom-swiper {
      margin: auto;
      width: 90%;
      position: static;

      .card {
        display: grid;
        place-items: center;
        width: 80%;
        margin: auto;

        p {
          font-size: 1.1em;
          line-height: 24px;
          word-spacing: 3px;
          text-align: justify;
          word-break: break-all;
        }

        .contact {
          display: grid;
          place-items: center;
          margin-top: 30px;

          &-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid orangered;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &-info {
            display: grid;
            place-items: center;

            & > * {
              font-size: 15px;
            }

            p:first-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>
