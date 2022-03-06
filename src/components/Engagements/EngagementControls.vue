<template>
  <div class="slight-p">
    <div class="grid_1-2">
      <!-- Engagement Switch -->
      <div>
        <h4>
          Engagement Switch
          <TooltipSwift>
            Switch your engagement on or off to hide or display it on the
            network.
          </TooltipSwift>
        </h4>
        <img
          class="pointer"
          src="@/assets/icons/toggle-switch-icon.svg"
          alt="Toggle Engagement Icon"
        />
      </div>

      <!-- Remunerate Displayer Slider -->
      <div>
        <h4>
          Remunerate your Displayer
          <TooltipSwift>
            Consider doing this for free. (Of the total amount you set out to
            pay to your Displayer Swiftouch takes 2.5%)
          </TooltipSwift>
        </h4>
        <p class="no-mar-y">
          <b>{{ contribution }}</b
          >% of sale
        </p>
        <input
          v-model="contribution"
          type="range"
          min="1"
          max="100"
          class="slider"
        />
      </div>
    </div>

    <div class="grid_1-2 m-mar-top">
      <!-- Delete Engagement -->
      <div>
        <h4>
          Delete Engagement
          <TooltipSwift> Delete your engagement. </TooltipSwift>
        </h4>
        <img
          class="pointer"
          src="@/assets/icons/delete-icon.svg"
          alt="Delete Engagement Icon"
        />
      </div>

      <!-- Display Engagement -->
      <div>
        <h4>
          Deploy to Display Network
          <TooltipSwift>
            Display your engagement on the display network. This will make you
            NFT public available.
          </TooltipSwift>
        </h4>
        <button>Save & Deploy Engagement</button>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipSwift from "@/components/shared/TooltipSwift.vue";
export default {
  components: {
    TooltipSwift,
  },
  data() {
    return {
      contribution: 27,
    };
  },
};
</script>

<style lang="scss" scoped>
h4 {
  font-weight: 400 !important;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: $clr-1;
  outline: none;
  border: 1px solid $clr-1;
  opacity: 1;
  -webkit-transition: 0.1s;
  transition: opacity 0.1s;
}

.slider:focus {
  border: 1px solid $clr-1 !important;
  background: $clr-1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid $white;
  border-radius: 50%;
  background: $clr-1;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 1px solid $white;
  border-radius: 50%;
  background: $clr-1;
  cursor: pointer;
}
</style>
