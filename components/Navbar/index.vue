<template>
  <div class="top-navbar" :class="{ showSticky: stickyNavBar }">
    <div class="navbar">
      <nav class="nav">
        <div class="logo">Aly H.</div>
        <div class="nav-contents">
          <ul>
            <li>
              <NuxtLink to="#">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Work</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Service</NuxtLink>
            </li>
            <li class="blog">
              Blog
              <ul class="blog-content">
                <li><NuxtLink to="#">Blog</NuxtLink></li>
                <li><NuxtLink to="#">Blog Details</NuxtLink></li>
                <li><NuxtLink to="#">Elements</NuxtLink></li>
              </ul>
            </li>
            <li>
              <NuxtLink to="#">Contacat</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="nav-end">
          <NuxtLink to="#"> Let's Talk </NuxtLink>
        </div>

        <div class="hamburgar" @click="activeHamburgar = !activeHamburgar">
          <div :class="{ 'hamburgar-first': activeHamburgar }"></div>
          <div :class="{ 'hamburgar-hide': activeHamburgar }"></div>
          <div :class="{ 'hamburgar-last': activeHamburgar }"></div>
        </div>
      </nav>
    </div>
    <NavbarMobile
      :showSideBar="activeHamburgar"
      @hideSidebar="activeHamburgar = false"
    />
  </div>
</template>

<script setup>
const activeHamburgar = ref(false);
const stickyNavBar = ref(false);

watch(activeHamburgar, (newVal, oldVal) => {
  if (newVal) document.querySelector("body").style.overflow = "hidden";

  if (!newVal) document.querySelector("body").style.overflow = "auto";
});

onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      stickyNavBar.value = true;
    } else {
      stickyNavBar.value = false;
    }
  });
});
</script>

<style lang="scss">
.showSticky {
  position: sticky !important;
  position: -webkit-sticky;
  animation: stickyAnimation 1s;
}

@keyframes stickyAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.top-navbar {
  background-color: rgba(255, 131, 82, 0.8);
  display: flex;

  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(3px);
  transition: all 1s ease;

  .navbar {
    width: 100%;
    display: flex;
    background-color: rgba(255, 131, 82, 0.5);
    height: 80px;

    .nav {
      width: 90%;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & :not(.logo, .hamburgar > *) {
        @media screen and (max-width: 870px) {
          display: none;
        }
      }

      .logo {
        font-size: 1.6em;
        font-weight: 900;
        color: $textSecondary;
      }

      .nav-contents {
        display: flex;
        margin: 0 20px;
        height: 100%;

        ul {
          margin: auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 40px;
          height: 100%;

          li {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100%;
          }

          li::before {
            content: "";
            position: absolute;
            bottom: 10px;
            left: 0;
            background-color: #fff;
            height: 1px;
            width: 100%;
            transform: scale(0);
            transform-origin: left;
            transition: all 0.3s ease;
          }

          li:hover::before {
            transform: scale(1);
          }

          li > * {
            text-decoration: none;
            text-transform: uppercase;
            color: $textSecondary;
          }

          .blog {
            display: flex;
            flex-direction: column;
            position: relative;
            color: #fff;
            text-transform: uppercase;
            cursor: pointer;

            @media screen and (max-width: 870px) {
              display: none;
            }

            &:hover .blog-content {
              padding: 30px 120px 30px 20px;
              height: 140px;
            }

            .blog-content {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              position: absolute;
              gap: 10px;
              background-color: #fff;
              height: 0;
              box-shadow: 1px 1px 10px #fff;
              top: 100%;
              left: 0;
              overflow: hidden;
              transition: height 0.1s ease, padding 0.1s 0.1s ease;

              li > * {
                white-space: nowrap;
                color: rgb(241, 118, 46);
              }

              li {
                height: 20px;
                transition: all 0.5s ease;
              }

              li:hover {
                transform: translateX(5px);
              }
            }
          }
        }
      }

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

      .hamburgar {
        width: 30px;
        height: 30px;
        display: flex;
        background-color: transparent;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        z-index: 1088;
        display: none;
        -webkit-tap-highlight-color: transparent;
        -moz-tap-highlight-color: transparent;
        -ms-tap-highlight-color: transparent;

        @media screen and (max-width: 870px) {
          display: flex;
        }

        div {
          width: 100%;
          height: 3px;
          background-color: transparent;
          border: 4px dashed white;
          transition: all 0.5s ease;
          z-index: 1088;
        }

        .hamburgar-first {
          transform: rotateZ(45deg) translateY(15px);
        }
        .hamburgar-hide {
          opacity: 0;
        }
        .hamburgar-last {
          transform: rotateZ(-45deg) translateY(-15px);
        }
      }
    }
  }
}
</style>
