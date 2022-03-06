<template>
  <div>
    <HeadingsSwift />

    <div class="grid_1-3">
      <CollectionBox />
    </div>
  </div>
</template>

<script>
import HeadingsSwift from "../components/shared/HeadingsSwift.vue";
import CollectionBox from "../components/Collections/CollectionBox.vue";
export default {
  components: {
    HeadingsSwift,
    CollectionBox,
  },
};
</script>
