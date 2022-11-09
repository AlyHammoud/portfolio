<template>
  <div class="footer">
    <div class="contact-us">
      <div class="contact-us-wrapper">
        <p>Contact Us</p>
        <p>+961 3 999 999</p>
        <p>example@mail.com</p>
        <p>Beirut, Lebanon 201 Main st, Site 207</p>
        <UtilsButtonLetsTalk class="contact-us-wrapper-button" />
      </div>
    </div>
    <div class="social">
      <p>Socialize with social</p>
      <div class="social-icons">
        <UtilsFontAwesome iconName="fa-brands fa-facebook" link="#" />
        <UtilsFontAwesome iconName="fa-brands fa-instagram" link="#" />
        <UtilsFontAwesome iconName="fa-brands fa-twitter" link="#" />
        <UtilsFontAwesome iconName="fa-brands fa-youtube" link="#" />
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

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
  }

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

    &-wrapper {
      display: flex;
      flex-direction: column;
      gap: 10px;

      p:first-child {
        font-weight: 900;
        font-size: 1.5em;
        margin-bottom: 10px;
      }

      &-button {
        align-self: center;
        width: 50%;
      }
    }
  }

  .social {
    background-color: rgb(34, 33, 33);

    > p {
      font-size: 1.4em;
      font-weight: 900;
      margin-bottom: 20px;
    }
    .social-icons {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
    }
  }
}
</style>
