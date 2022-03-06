<template>
  <div>
    <article class="brdr-1">
      <img
        @click="$emit('close')"
        class="pointer close-engagement"
        src="@/assets/icons/close-box-icon.svg"
        alt="Close Box Icon"
      />

      <div class="n-pad">
        <DisplaySetup />
      </div>
    </article>
  </div>
</template>

<script>
import DisplaySetup from "./DisplaySetup.vue";
export default {
  components: {
    DisplaySetup,
  },
};
</script>

<style scoped lang="scss">
.close-engagement {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
