<template>
  <div>
    <swiper
      :slides-per-view="7"
      :space-between="30"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false,
      }"
      :breakpoints="{
        '220': {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        '444': {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        '655': {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        '800': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        '1025': {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        '1250': {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        '1502': {
          slidesPerView: 7,
          spaceBetween: 50,
        },
      }"
      :modules="modules"
      class="custom-swiper"
    >
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/php.jpg" />
          <p>PHP</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/csharp.png" />
          <p>C#</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/css3.png" />
          <p>CSS 3</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/dart.png" />
          <p>Dart</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/docker.png" />
          <p>Docker</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/flutter.png" />
          <p>Flutter</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/html5.png" />
          <p>HTML 5</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/javascript.png" />
          <p>Javascript</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/laracel.png" />
          <p>Laravel</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/nodejs.jpg" />
          <p>Nodejs</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/nuxtjs.png" />
          <p>Nuxt js</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/react.png" />
          <p>Reactjs</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card">
          <img src="~/assets/images/vuejs.png" />
          <p>Vue js</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";
// import Swiper from "swiper/bundle";

// Import Swiper styles
import "swiper/css";

const modules = ref([Autoplay]);

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss" scoped>
.custom-swiper {
  padding: 20px;
  @media (max-width: 443px) {
    margin-left: 40px;
  }
}

.card {
  width: 150px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 1px 13px rgba(128, 128, 128, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 10px;
  background-color: #fff;

  & img {
    max-width: 50px;
    height: 50px;
  }
}
</style>
