<template>
  <div>
    <div class="brdr-y-1 n-pad-top n-pad-bottom grid_1-3">
      <div
        v-for="tab in tabs"
        :key="tab"
        :class="['tab-button', { active: currentTab === tab }]"
        @click="currentTab = tab"
        class="center"
      >
        <h6 class="brdr-1">
          {{ tab }}
        </h6>
      </div>
    </div>

    <div>
      <keep-alive
        ><component
          :is="currentTabComponent"
          class="tab fade-in n-pad"
        ></component
      ></keep-alive>
    </div>
    <!-- <div class="right next n-pad-right">
      <p @click="toConfig()" class="pointer">
        <b>{{ next }}</b>
      </p>
    </div> -->
  </div>
</template>

<script>
import EngagementAnalytics from "./EngagementAnalytics.vue";
import EngagementConfig from "./EngagementConfig.vue";
import EngagementControls from "./EngagementControls.vue";
export default {
  components: {
    EngagementAnalytics,
    EngagementConfig,
    EngagementControls,
  },
  data() {
    return {
      currentTab: "Analytics",
      tabs: ["Analytics", "Config", "Controls"],
      next: "NEXT >",
    };
  },
  methods: {
    toConfig() {
      if (this.currentTab === "Analytics") {
        this.currentTab = "Config";
      }
      if (this.currentTab === "Config") {
        this.currentTab = "Controls";
      }
      if (this.currentTab === "Controls") {
        this.next = "";
      }
    },
  },
  computed: {
    currentTabComponent() {
      return "Engagement" + this.currentTab;
    },
  },
};
</script>

<style lang="scss" scoped>
.next {
  position: absolute;
  bottom: 0;
  right: 0;
}
h6 {
  font-weight: 400 !important;
  width: 160px;
  margin: 0 !important;
}

.active > h6 {
  color: $white;
  background-color: $clr-1;
}
</style>
