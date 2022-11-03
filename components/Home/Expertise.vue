<template>
  <div class="experties-wrapper">
    <div class="title">
      <h1>My Experties</h1>
    </div>
    <div class="card-list">
      <div class="card">
        <div class="card-icon">
          <img src="~/assets/images/php.png" alt="" />
        </div>
        <div class="card-title">2123</div>
        <div class="card-text">sdfs</div>
        <div class="card-footer">
          <NuxtLink to="#">Go to contents</NuxtLink>
        </div>
      </div>

      <div class="card">
        <div class="card-icon">
          <img src="~/assets/images/php.png" alt="" />
        </div>
        <div class="card-title">2123asdf22</div>
        <div class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga esse,
          molestias enim temporibus reiciendis ipsum quas facere aliquam vel
          accusamus iure explicabo eum culpa ex incidunt numquam nobis fugiat?
        </div>
        <div class="card-footer">
          <NuxtLink to="#">Go to contents</NuxtLink>
        </div>
      </div>

      <div class="card">
        <div class="card-icon">
          <img src="~/assets/images/php.png" alt="" />
        </div>
        <div class="card-title">2123</div>
        <div class="card-text">sdfs</div>
        <div class="card-footer">
          <NuxtLink to="#">Go to contents</NuxtLink>
        </div>
      </div>

      <div class="card">
        <div class="card-icon">
          <img src="~/assets/images/php.png" alt="" />
        </div>
        <div class="card-title">2123</div>
        <div class="card-text">sdfs</div>
        <div class="card-footer">
          <NuxtLink to="#">Go to contents</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.experties-wrapper {
  width: 90%;
  margin: auto;

  .title {
    margin-bottom: 40px;
  }

  .card-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    // gap: 20px;
    margin-bottom: 50px;

    @media (max-width: 611px) {
      grid-template-columns: repeat(1, 100%);
    }

    .card {
      padding: 20px;
      display: flex;
      flex-direction: column;
      position: relative;
      border-right: 1px solid rgba(224, 219, 219, 0.5);
      border-bottom: 1px solid rgba(224, 219, 219, 0.5);
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0px 1px 12px rgba(255, 69, 0, 0.5);
      }

      .card-icon {
        width: 90px;
        height: 60px;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 5px;
        box-shadow: 0px 1px 13px #000;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }
      }

      .card-title {
        font-size: 1.3em;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .card-text {
        font-size: 1em;
        letter-spacing: 1.1px;
        word-spacing: 1.2px;
        line-height: 30px;
        margin-bottom: 50px;
      }

      .card-footer > * {
        position: absolute;
        cursor: pointer;
        border-bottom: 2px solid orangered;
        bottom: 20px;
        color: orangered;
        padding-bottom: 10px;
        text-decoration: none;
        transform-origin: left;
        transition: all 1s;

        &:hover {
          scale: 1.1 1;
        }
      }
    }
  }
}
</style>
