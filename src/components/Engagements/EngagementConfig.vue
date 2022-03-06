<template>
  <div>
    <div>
      <div class="grid_1-2">
        <div>
          <h4>
            Select Geolocation
            <TooltipSwift>
              Select specific locations where you would like your NFT to be
              displayed.
            </TooltipSwift>
          </h4>
          <p>#data</p>
        </div>

        <div>
          <h4>
            Select Devices
            <TooltipSwift>
              Select specific devices on which you would like your NFT
              Engagement to be displayed.
            </TooltipSwift>
          </h4>
          <p>#data</p>
        </div>
      </div>
    </div>

    <div>
      <h4>
        Enter Display Hashtags: #
        <input
          type="text"
          name="tags"
          v-model.trim="tag"
          @keypress.prevent.stop.enter="addTag"
        />
        <TooltipSwift>
          Engagement hashtags are what we use to display your NFT's on specific
          Displayer websites who choose the same hashtags as you. Words are
          separated by hyphens (-) eg. # digital-art.
        </TooltipSwift>
      </h4>

      <ul class="tags no-mar-bottom n-mar-top">
        <li class="round tag brdr-1" v-for="(tag, index) in tags" :key="index">
          #{{ tag }}
          <span class="delete-tag pointer" @click="tags.splice(index, 1)"
            ><b>x</b></span
          >
        </li>
      </ul>
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
      tag: "",
      tags: this.value || [],
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    addTag() {
      if (this.tag && !this.tags.includes(this.tag)) {
        this.tags.push(this.tag);
        this.tag = "";
      }
    },
  },
  watch: {
    tags(n) {
      this.$emit("input", n);
    },
  },
};
</script>

<style lang="scss" scoped>
h4 {
  font-weight: 400 !important;
  margin-bottom: 0rem !important;
}
.tags {
  display: table;
  clear: both;
  content: "";
  list-style: none !important;
  padding-left: 0;
}
.tag {
  float: left;
  width: min-content;
  white-space: nowrap;
  padding: 0 0.5rem 0rem 0.5rem;
  margin: 0.1rem;
}
.delete-tag {
  margin-left: 0.5rem;
}
</style>
