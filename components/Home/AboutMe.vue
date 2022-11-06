<template>
  <div class="about-me">
    <div class="about-me-wrapper">
      <div class="contents">
        <h1>About Me</h1>
        <p class="brief">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          praesentium reiciendis dignissimos delectus nesciunt harum vel est et,
          corporis aperiam repudiandae corrupti ea quia quis natus perspiciatis
          ipsa quasi! Possimus?
        </p>
        <p class="caption">
          "What was the epicurus towards their children; each of these can have
          a chain.
        </p>
      </div>
      <div class="progresses">
        <div class="progresses-wrapper">
          <p>Forntend</p>
          <p class="percentage">90%</p>
          <div class="progress progress-front">
            <div class="progress-size"></div>
          </div>
        </div>
        <div class="progresses-wrapper">
          <p>Backend</p>
          <p class="percentage">75%</p>
          <div class="progress progress-back">
            <div class="progress-size"></div>
          </div>
        </div>
      </div>

      <div class="swipers">
        <HomeSlider />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.about-me {
  width: 100%;
  // height: 700px;
  height: 100%;
  min-height: 700px;
  position: relative;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 80%;
    min-height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(243, 233, 214, 0.3);
    border-top-right-radius: 100px;
    border-bottom-right-radius: 50px;
    z-index: -1;
  }

  &-wrapper {
    width: 90%;
    height: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    place-items: center;
    gap: 50px;
    z-index: 122;
    position: relative;

    @media (max-width: 700px) {
      grid-template-columns: repeat(1, 100%);
    }

    .contents {
      h1 {
        margin-bottom: 40px;
        font-size: 3em;

        @media (max-width: 700px) {
          font-size: 2.5em;
        }
      }

      .brief {
        font-size: 1.1em;
        letter-spacing: 1.1px;
        line-height: 30px;
        word-spacing: 1.2px;
        margin-bottom: 20px;

        @media (max-width: 700px) {
          font-size: 1em;
        }
      }

      .caption {
        font-size: 1.8em;
        color: rgb(252, 96, 39);

        @media (max-width: 700px) {
          font-size: 1.3em;
        }
      }
    }

    .progresses {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 40px;

      @media (max-width: 700px) {
        width: 100%;
      }

      .progresses-wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 20px;

        .progress {
          width: 90%;
          height: 4px;
          background-color: white;
          box-shadow: 0 1px 10px rgba(187, 182, 182, 0.9);
          position: relative;

          .progress-size {
            position: absolute;
            top: 0;
            left: 0;
            width: 90%;
            height: 100%;
            background-color: orangered;
          }
        }

        .progress-back {
          .progress-size {
            width: 75%;
          }
        }

        .percentage {
          align-self: flex-end;
          margin-top: -40px;
          margin-right: 40px;
          color: orangered;
        }
      }
    }
  }

  .swipers {
    width: 80%;
    grid-column: span 2;

    @media (max-width: 700px) {
      grid-column: 1;
    }

    & *>img {
      width: 80px;
    }
  }
}
</style>
