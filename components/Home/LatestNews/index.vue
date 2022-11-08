<template>
  <div class="latest-wrapper">
    <div class="latest-content">
      <div class="title">
        <h1>Latest News</h1>
      </div>
      <div class="latest-content-card">
        <HomeLatestNewsSlider />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
//
.latest-wrapper {
  width: 100%;
  position: relative;
  padding: 70px 0;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 80%;
    height: 100%;
    background-color: rgba(255, 69, 0, 0.1);
    border-top-left-radius: 70px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 5px 20px black;
  }

  .latest-content {
    margin: auto;
    width: 90%;
    position: relative;

    .title {
      margin-bottom: 30px;

      h1 {
        font-size: 3em;
        font-weight: 900;

        @media screen and (max-width: 800px) {
          font-size: 2em;
        }
      }
    }

    .latest-content-card {
      margin: 0 auto;
      width: 85%;

      @media (max-width: 480px) {
        width: 100%;
      }
    }
  }
}
</style>
