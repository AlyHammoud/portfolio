<template>
  <div class="nav-end">
    <NuxtLink to="#"> Let's Talk </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.nav-end {
  border: 1px solid $textSecondary;
  padding: 10px 25px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  & > * {
    color: $textSecondary;
    transition: all 0.8s ease-in;
    text-decoration: none;
  }

  &:hover > * {
    color: rgba(255, 131, 82, 0.8);
    z-index: 2;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: $textSecondary;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
    z-index: 1;
  }

  &:hover::before {
    height: 100%;
  }
}
</style>
