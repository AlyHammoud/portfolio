<template>
  <div class="default-layout">
    <!-- Navbar and below hero -->
    <Navbar />
    <div class="default-layout-top">
      <div class="dafault-layout-nav"></div>
      <div class="hero">
        <slot name="main-layout-hero"></slot>
      </div>
    </div>

    <!-- Main content in the page -->
    <main>
      <slot name="main-layout-main"></slot>
    </main>

    <!-- Footer -->
    <div class="footer">
      <footer></footer>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
//
</style>
