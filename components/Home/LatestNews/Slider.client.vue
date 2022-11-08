<template>
  <div>
    <div class="image">
      <swiper
        :slides-per-view="2"
        :space-between="80"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: true,
        }"
        :navigation="true"
        :slidesPerGroup="2"
        :modules="modules"
        :breakpoints="{
          200: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }"
        class="custom-swiper"
      >
        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/201" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/201/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/202" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/202/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/203" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/203/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/204" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/204/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/205/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/200/205" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/206/206" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/206/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/207/200" alt="" />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="image-card">
            <div class="image-card-contents">
              <div class="hints">
                <div class="tips">tip</div>
                <div class="date">12 March | by Ali</div>
              </div>
              <div class="hints-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </div>
            </div>
            <img src="https://picsum.photos/207/208" alt="" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper";
// import Swiper from "swiper/bundle";

// Import Swiper styles
import "swiper/css";
// import "swiper/swiper-bundle.css";

const modules = ref([Autoplay, Navigation]);
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  width: 80vw;
  height: 30vw;

  @media screen and (min-width: 1000px) {
    width: 850px;
    height: 350px;
    margin: 0 auto;
  }
  @media screen and (max-width: 799px) {
    width: 450px;
    height: 350px;
    margin: 0 auto;
  }

  @media screen and (max-width: 570px) {
    width: 350px;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }

  .custom-swiper {
    display: flex;
    height: 100%;
    width: 100%;

    .image-card {
      width: 100%;
      height: 100%;
      position: relative;
      display: flex;
      overflow: hidden;

      &-contents {
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          to bottom,
          rgba(97, 93, 93, 0),
          60%,
          rgba(31, 30, 30)
        );
        height: 100%;
        width: 100%;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 30px;
        gap: 10px;
        color: #fff;
        text-shadow: -1px 5px 22px rgb(78, 62, 62);
        z-index: 11;

        &:hover ~ img {
          scale: 1.2;
        }

        .hints {
          display: flex;
          gap: 20px;

          .tips {
            padding: 2px 20px 4px 20px;
            border-radius: 30px;
            background-color: orangered;
          }
        }

        .hints-title {
          text-decoration: underline;
          line-height: 23px;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: center center;
      border-radius: 10px;
      transition: all 0.5s;
    }
  }
}
</style>
