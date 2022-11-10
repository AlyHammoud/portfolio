<template>
  <div
    class="nav-mob"
    @click.self="(showSideBar = false), emits('hideSidebar')"
    :class="{ show: showSideBar }"
  ></div>
  <div class="sidebar" :class="{ show: showSideBar }">
    <div class="sidebar-wrapper">
      <div class="logo">Aly H.</div>
      <div class="nav-contents">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/work">Work</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#">Service</NuxtLink>
          </li>
          <li class="blog">
            Blog
            <ul class="blog-content">
              <li></li>
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
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["hideSidebar"]);

const { showSideBar } = defineProps({
  showSideBar: {
    type: Boolean,
    default: false,
    required: true,
  },
});
</script>
<style lang="scss" scoped>
.nav-mob {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(48, 48, 48, 0.5);
  z-index: 102;
  transition: all 0.5s ease-out;
  transform: translateX(-100%);
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 50%;
  width: 240px;
  height: 100vh;
  background-color: rgba(255, 131, 82, 0.9);
  z-index: 1345;
  transition: all 0.5s ease-out;
  transform: translateX(-110%);
  box-shadow: 1px 1px 17px #000;

  overflow-x: hidden;

  .sidebar-wrapper {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin-left: 30px;
    margin-top: 80px;

    .logo {
      font-size: 2em;
      font-weight: 900;
      color: #fff;
      width: 100%;
    }

    .nav-contents {
      width: 100%;

      .nav-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          font-size: 18px;
          text-transform: uppercase;

          * {
            color: #fff;
            text-decoration: none;
          }
        }

        .blog {
          color: #fff;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 24px;
          transition: all 0.5s ease;

          .blog-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-left: 20px;
          }
        }
        .blog:hover {
          height: 110px;
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
      width: 180px;

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
  }
}

.show {
  transform: translateX(0);
}
</style>
