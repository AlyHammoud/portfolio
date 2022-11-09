<template>
  <div class="landing-page">
    <NuxtLayout name="main">
      <template #main-layout-hero>
        <div class="landing-page-hero">
          <div class="breif-me">
            <div class="profile-image">
              <img src="~/assets/images/pic-me.png" alt="" />
            </div>
            <div class="breif-text">
              <p>My name is Ali.</p>
              <p>Full Stack Developer</p>
              <p>ِA freelancer</p>
            </div>
          </div>
          <div class="info">
            <div class="info-work">
              <p>Major in</p>
              <p>Web & Mobile</p>
            </div>
            <div class="info-phone">
              <p>Phone</p>
              <p>+ 961 70 999 999</p>
            </div>
            <div class="info-email">
              <p>Drop your Messsage</p>
              <p>example@gmail.com</p>
              <!-- <EnvelopeIcon class="envelope" /> -->
            </div>
          </div>
        </div>
      </template>

      <template #main-layout-main>
        <div class="expertise" data-aos="fade-right">
          <HomeExpertise />
        </div>
        <div class="my-work" data-aos="fade-up-right">
          <HomeWork />
        </div>
        <div class="about-me" data-aos="flip-left">
          <HomeAboutMe />
        </div>
        <div class="client-testimonial" data-aos="zoom-in">
          <HomeClient />
        </div>
        <div class="LatestNews" data-aos="zoom-in" data-aos-delay="300">
          <HomeLatestNews />
        </div>
        <div class="home-footer">
          <Footer />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// import { EnvelopeIcon } from "@heroicons/vue/24/solid";
</script>

<style lang="scss">
.landing-page-hero {
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(255, 131, 82, 0.8);
  position: relative;

  @media screen and (max-width: 610px) {
    min-height: 700px;
  }

  &::before {
    content: "";
    width: 100%;
    height: 50%;
    background-color: rgba(255, 131, 82, 0.5);
    top: 0;
    left: 0;
    transform: skewY(-8deg);
    transform-origin: left;
    position: absolute;
  }

  &::after {
    content: "";
    width: 100%;
    height: 80%;
    background-color: rgba(255, 131, 82, 1);
    transform: skewY(5deg);
    opacity: 0.6;
    position: absolute;
    top: 50%;
    left: 0;
  }

  .breif-me {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;

    @media screen and (max-width: 610px) {
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 40px;
      margin-top: 40px;
    }

    .profile-image {
      height: 300px;
      width: 300px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid rgba(255, 255, 255, 0.5);

      @media screen and (max-width: 700px) {
        height: 250px;
        width: 250px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 30%;
        transform: scale(0.95) rotateY(180deg);
        border-radius: 50%;
      }
    }
    .breif-text {
      // width: 50%;
      p {
        // width: 100%;
        color: #fff;
      }
      p:first-child {
        font-size: 6vw;
        font-weight: 900;

        @media screen and (max-width: 540px) {
          font-size: 6vw;
        }
      }
      p:nth-child(2) {
        font-size: 5vw;
        font-weight: 700;

        @media screen and (max-width: 540px) {
          font-size: 7vw;
        }
      }

      p:last-child {
        color: #000;
        font-size: 3vw;
        margin-top: 30px;

        @media screen and (max-width: 540px) {
          font-size: 4vw;
        }
      }
    }
  }

  .info {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    padding: 0 80px;
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: 610px) {
      padding: 0 40px;
      flex-direction: column;
      gap: 22px;
    }

    div {
      z-index: 1;
      display: flex;
      flex-direction: column;
      color: #fff;
      gap: 10px;

      @media screen and (max-width: 610px) {
        gap: 2px;
      }
    }

    .info-email {
      position: relative;
      display: flex;

      .envelope {
        position: absolute;
        width: 35px;
        right: -50px;
        top: 50%;
        border: 1px solid white;
        border-radius: 50%;
        padding: 4px;
        transform: translateY(-50%);

        @media screen and (max-width: 610px) {
          // inset: 0;
          left: 150px;
        }
      }
    }
  }
}

.expertise {
  margin-top: 50px;
}

.my-work {
  margin-top: 50px;
}

.client-testimonial {
  margin-top: 140px;
  margin-bottom: 50px;
}

.home-footer {
  width: 100%;
  margin-top: 55px;
  margin-bottom: 0;
}
</style>
