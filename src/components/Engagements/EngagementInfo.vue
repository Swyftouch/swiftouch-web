<template>
  <div class="n-pad">
    <div class="center" v-if="toggleImport">
      <h2><b>+ Import your NFT</b></h2>

      <div class="center" style="width: 100%; max-width: 500px">
        <h4>
          Copy your <b>NFT contract address & token ID</b> from your external
          provider or Swiftouch collection and paste it below.
        </h4>
      </div>

      <div class="n-mar-y">
        <input
          placeholder="Contract Address"
          class="txt-center contractAddressField"
          v-model="contractAddress"
        />
      </div>

      <input
        placeholder="Token ID"
        class="txt-center tokenIdField"
        v-model="tokenId"
      />

      <div class="m-mar-y">
        <button
          @click="
            getNftMetadata(),
              (toggleEngagementInfo = !toggleEngagementInfo),
              (toggleImport = !toggleImport)
          "
        >
          + Import NFT into Engagement
        </button>
      </div>
    </div>

    <div class="grid_1-3" v-show="toggleEngagementInfo">
      <div>
        <img class="nft-image round" :src="image" />
      </div>
      <div class="span-2-col">
        <h3>
          <b>{{ title }}</b>
        </h3>
        <h4>{{ description }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      toggleImport: true,
      toggleEngagementInfo: false,

      // NFT Metadata
      title: "",
      description: "",
      image: "",
    };
  },
  methods: {
    getNftMetadata() {},
  },
};
</script>

<style scoped lang="scss">
.nft-image {
  width: 100%;
}
.contractAddressField {
  width: 400px;
  max-width: 100%;
}

.tokenIdField {
  width: 200px;
  max-width: 100%;
}
</style>
