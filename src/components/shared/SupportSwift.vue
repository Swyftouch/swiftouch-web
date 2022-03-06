<template>
  <div>
    <img
      class="support-icon pointer"
      @click="toggleSupport = !toggleSupport"
      src="@/assets/icons/support-icon.svg"
      alt="Support Icon"
    />
    <article v-if="toggleSupport" class="support-box brdr-1 m-pad">
      <h4 class="no-mar-top">Hey! How can we help you?</h4>
      <textarea
        name="support"
        class="support-textarea n-mar-y"
        id="support"
        placeholder="Send your message to our lighting fast support team!"
      ></textarea>
      <div class="right"><button>Send Message</button></div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleSupport: false,
    };
  },
};
</script>

<style scoped lang="scss">
.support-icon {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
}

.support-box {
  position: absolute;
  max-width: 500px;
  width: 90%;
  height: 250px;
  z-index: 2;
  bottom: 4rem;
  right: 1rem;
}

.support-textarea {
  width: 100%;
}

h4 {
  font-weight: 400 !important;
}
</style>
