<template>
  <div>
    <NavigatorsSwift v-if="$route.name != 'home'" />

    <main>
      <router-view class="fade-in" />
    </main>
    <footer class="center">
      <p>
        &copy; Swiftouch 2022 |
        <a download href="/swiftouch-legal.pdf">Legal</a>
      </p>
    </footer>
  </div>
</template>
<script>
import NavigatorsSwift from "./components/shared/NavigatorsSwift.vue";
export default {
  name: "App",
  components: {
    NavigatorsSwift,
  },
};
</script>

<style lang="scss">
.full-box {
  @include respond(lapdesk) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  @include respond(mobitab) {
    overflow-y: scroll;
  }
}

.span-2-col {
  @include respond(lapdesk) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
}

.dashed {
  border-style: dashed !important;
}

.center-box-item {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box {
  position: relative;
}

.add-box,
.rev-box {
  height: 360px;
  position: relative;
}

.view-sub-heading {
  @include respond(mobile) {
    margin-bottom: calc(26px + 4 * (100vw - 320px) / 480) !important;
  }
  @include respond(tablet) {
    margin-bottom: calc(28px + 4 * (100vw - 480px) / 768) !important;
  }
  @include respond(laptop) {
    margin-bottom: calc(28px + 6 * (100vw - 768px) / 1366) !important;
  }
  @include respond(desktop) {
    margin-bottom: calc(28px + 6 * (100vw - 1366px) / 2400) !important;
  }
}
</style>
