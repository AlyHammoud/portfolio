<template>
  <div class="font-awesome-util">
    <NuxtLink :to="link" class="font-awesome-util-link">
      <font-awesome-icon :icon="iconName" />
    </NuxtLink>
  </div>
</template>

<script setup>
const { iconName, link } = defineProps({
  iconName: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
});
</script>

<style lang="scss">
.font-awesome-util {
  & > &-link {
    padding: 10px;
    background-color: #333;
    border: 1px solid orangered;
    border-radius: 4px;
    color: white;
    perspective: 1000px;

    &:hover * {
      transition: all 1s;
      transform: rotateY(180deg);
      transform-origin: center;
    }
  }
}
</style>
