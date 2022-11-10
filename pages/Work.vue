<template>
  <div class="work-page">
    <NuxtLayout name="main">
      <template #main-layout-hero>
        <div class="work-page-wrapper">
          <p>My Work</p>
        </div>
      </template>

      <template #main-layout-main>
        <div class="my-work" data-aos="fade-up-right">
          <HomeWork />
        </div>

        <div class="home-footer">
          <Footer />
        </div>
      </template>
    </NuxtLayout>
  </div>
</template>

<style lang="scss" scoped>
.work-page {
  margin: 0;
  padding: 0;
  .my-work {
    display: flex;

    & > * {
      width: 100%;
      // max-width: 1500px;
      padding: 0;
      margin-top: 50px;
      gap: 20px;
      justify-content: center;
      margin-left: -20px;
      margin: 0 auto;

      @media (max-width: 1000px) {
        margin-inline: 10%;
      }
    }
  }
  .work-page-wrapper {
    width: 100%;
    height: 15rem;
    background-color: rgba(255, 131, 82, 0.8);
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin-bottom: 50px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background-color: rgba(255, 131, 82, 0.5);
      -webkit-transform: rotate(-12deg) translateY(-30%);
      transform: rotate(-2deg) translateY(-30%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40%;
      background-color: rgba(255, 131, 82, 0.5);
      -webkit-transform: rotate(2deg) translateY(30%);
      transform: rotate(2deg) translateY(30%);
    }

    p {
      font-size: 3em;
      margin-left: 80px;
      color: #fff;
      letter-spacing: 1.2px;
    }
  }
}
</style>
