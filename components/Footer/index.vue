<template>
  <div class="footer">
    <div class="contact-us">
      <p>Contact Us</p>
      <p>+961 3 999 999</p>
      <p>example@mail.com</p>
      <p>Beirut, Lebanon 201 Main st, Site 207</p>
      <button>Contact us</button>
    </div>
    <div class="social">
      <p>Socialize with social</p>
      <div class="social-icons">
        <p>f</p>
        <p>f</p>
        <p>f</p>
        <p>f</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  .contact-us,
  .social {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    color: #fff;
  }

  .contact-us {
    background-color: rgba(36, 35, 35, 0.7);
  }

  .social {
    background-color: rgb(34, 33, 33);
  }
}
</style>
