<template>
  <div onclick="" class="tooltip-container">
    <img class="tooltip-img" src="@/assets/icons/tooltip-icon.svg" />
    <div class="tooltip-box">
      <p class="white tooltip"><slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tooltip-container {
  position: relative;
  display: inline;
  margin-left: 0.4rem;
  margin-bottom: -0.5rem !important;
}

.tooltip-img:hover {
  opacity: 0.7;
  transition: 100ms;
}

.tooltip-img:hover ~ .tooltip-box {
  display: block;
}

.tooltip-box {
  border-radius: 10px;
  display: none;
  background-color: $black;
  position: absolute;
  z-index: 1;
  bottom: 1rem;
  left: 1rem;
  padding: 0.2rem 0.5rem 0.1rem 0.5rem;
  width: 240px;
}

.tooltip {
  margin: 0 !important;
  font-size: 14px !important;
}
</style>
