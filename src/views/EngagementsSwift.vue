<template>
  <div>
    <HeadingsSwift />

    <div class="grid_1-3">
      <article
        v-if="toggleCreateEngagement"
        @click="
          (toggleCreateEngagement = !toggleCreateEngagement),
            (toggleEngagementBox = !toggleEngagementBox)
        "
        class="brdr-1 add-box pointer dashed"
      >
        <img
          class="center-box-item"
          src="@/assets/icons/add-box-icon.svg"
          alt="Add Box Icon"
        />
      </article>

      <EngagementBox
        @close="close(), (toggleCreateEngagement = !toggleCreateEngagement)"
        v-show="toggleEngagementBox"
        class="slide-in-left full-box"
        v-for="engagementBox in engagementBoxes"
        :key="engagementBox.id"
      />
    </div>
  </div>
</template>

<script>
import EngagementBox from "../components/Engagements/EngagementBox.vue";
import HeadingsSwift from "../components/shared/HeadingsSwift.vue";
export default {
  components: {
    HeadingsSwift,
    EngagementBox,
  },
  data() {
    return {
      toggleCreateEngagement: true,
      toggleEngagementBox: false,
      engagementBoxes: [
        {
          id: 1,
        },
      ],
    };
  },

  methods: {
    close() {
      this.toggleEngagementBox = false;
    },
    createEngagement() {
      this.engagementBoxes.push({
        id: this.engagementBoxId++,
      });
    },
  },
};
</script>
