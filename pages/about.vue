<template>
  <div class="about">
    <div class="kkk">
      <div class="a">Logo</div>
      <div class="b">
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
      <div class="c">lllll</div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>

<style lang="scss">
//
.about {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;

  .kkk {
    width: 70%;
    background-color: yellow;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .a {
    }

    .b {
      display: flex;

      ul {
        display: flex;
        gap: 20px;
      }
    }
  }
}
</style>
