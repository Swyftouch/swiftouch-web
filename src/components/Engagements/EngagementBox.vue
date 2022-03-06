<template>
  <div>
    <article class="brdr-1">
      <img
        @click="$emit('close')"
        class="pointer close-engagement"
        src="@/assets/icons/close-box-icon.svg"
        alt="Close Box Icon"
      />
      <EngagementInfo />
      <EngagementPanel />
    </article>
  </div>
</template>

<script>
import EngagementInfo from "./EngagementInfo.vue";
import EngagementPanel from "./EngagementPanel.vue";
export default {
  components: {
    EngagementInfo,
    EngagementPanel,
  },
};
</script>

<style scoped lang="scss">
.nft-image {
  max-width: 340px;
  width: 100%;
}
.close-engagement {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
