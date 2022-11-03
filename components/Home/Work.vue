<template>
  <div class="work-wrapper">
    <div class="title">
      <h1>My Work</h1>
    </div>
    <div class="work-list">
      <div class="image">
        <img src="https://picsum.photos/200/200" alt="" />
        <div class="work-link"><NuxtLink to="#">View all work</NuxtLink></div>
      </div>

      <div class="image">
        <img src="https://picsum.photos/200/200" alt="" />
      </div>

      <div class="image">
        <img src="https://picsum.photos/200/200" alt="" />
      </div>

      <div class="image">
        <img src="https://picsum.photos/200/200" alt="" />
      </div>
    </div>
    <div class="more-work">
      <NuxtLink to="#">More work</NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.work-wrapper {
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 950px) {
    margin: 0 100px;
  }

  @media screen and (max-width: 500px) {
    margin: 0 30px;
  }

  @media screen and (min-width: 1250px) {
    max-width: 90%;
  }

  .title {
    margin-bottom: 40px;
  }

  .work-list {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    width: 100%;
    gap: 30px;
    margin-bottom: 40px;

    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 100%);
    }

    @media screen and (min-width: 1250px) {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      width: 100%;
      align-items: center;
      justify-content: center;
    }

    .image {
      width: 100%;
      height: 300px;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;

      @media screen and (min-width: 1250px) {
        max-width: 30%;
      }

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 69, 0, 0.2);
        bottom: -100%;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        scale: 1.01;
        &::before {
          bottom: 0;
        }

        .work-link * {
          opacity: 1;
          pointer-events: all;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .work-link {
        font-size: 1.3em;
        color: black;
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        & * {
          padding: 5px 0;
          color: orangered;
          opacity: 0;
          pointer-events: none;
        }
      }
    }
  }
  .more-work {
    margin: 10px auto 50px auto;
  }
  .more-work > * {
    font-size: 1.2em;
    text-decoration: none;
    color: orangered;

    padding: 10px 30px;
    border: 1px solid orangered;
    border-radius: 50px;
  }
}
</style>
