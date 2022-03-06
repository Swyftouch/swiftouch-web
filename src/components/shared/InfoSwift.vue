<template>
  <div onclick="">
    <div class="activator">
      <img src="@/assets/icons/info-icon.svg" alt="Info Icon" />
    </div>
    <div class="info shadow brdr-1 m-pad-x round">
      <div class="n-pad-x">
        <h4><slot></slot></h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.info {
  position: absolute;
  background-color: $white;
  display: none;
  z-index: 1;
  @include respond(mobile) {
    margin-top: 1rem;
    left: 2vw;
    right: 2vw;
  }
  @include respond(tablet) {
    margin-top: 1rem;
    left: 7vw;
    right: 7vw;
  }
  @include respond(laptop) {
    margin-top: 1rem;
    left: 9vw;
    right: 9vw;
    margin-right: -1rem;
  }
  @include respond(desktop) {
    margin-top: 1rem;
    left: 11vw;
    right: 11vw;
    margin-right: -1rem;
  }
}
.activator {
  width: min-content;
  margin: 1.8rem auto auto auto;
}
.activator:hover ~ .info {
  display: block;
}
</style>
