<template>
  <div>
    <HeadingsSwift />

    <div class="grid_1-3">
      <article
        v-if="toggleCreateDisplay"
        @click="
          (toggleCreateDisplay = !toggleCreateDisplay),
            (toggleDisplayBox = !toggleDisplayBox)
        "
        class="brdr-1 add-box pointer dashed"
      >
        <img
          class="center-box-item"
          src="@/assets/icons/add-box-icon.svg"
          alt="Add Box Icon"
        />
      </article>
    </div>

    <DisplayBox
      @close="close(), (toggleCreateDisplay = !toggleCreateDisplay)"
      v-show="toggleDisplayBox"
      class="slide-in-left full-box"
    />
    <!-- v-for="DisplayBox in DisplayBoxs"
      :key="DisplayBox.id" -->
  </div>
</template>

<script>
import DisplayBox from "../components/Displays/DisplayBox.vue";
import HeadingsSwift from "../components/shared/HeadingsSwift.vue";
export default {
  components: {
    HeadingsSwift,
    DisplayBox,
  },
  data() {
    return {
      toggleCreateDisplay: true,
      toggleDisplayBox: false,
      // DisplayBoxs: [
      //   {
      //     id: 1,
      //   },
      // ],
      // DisplayBoxId: 2,
    };
  },
  methods: {
    close() {
      this.toggleDisplayBox = false;
    },
    //   createDisplay() {
    //     this.DisplayBoxs.push({
    //       id: this.DisplayBoxId++,
    //     });
    //   },
    // },
  },
};
</script>
