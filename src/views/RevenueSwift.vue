<template>
  <div>
    <HeadingsSwift />

    <div class="grid_1-3">
      <article class="brdr-1 dashed rev-box">
        <div class="center m-pad">
          <div class="m-mar-top"><h4>Displays Profit</h4></div>
          <div class="m-mar-y">
            <h1>$ {{ displayProfit }}</h1>
            <h3>
              <b>Eth {{ displayProfitEthConvert }}</b>
            </h3>
          </div>
          <!-- <button class="n-mar-top">
            ...
          </button> -->
        </div>
      </article>
      <article class="brdr-1 dashed rev-box">
        <div class="center m-pad">
          <div class="m-mar-top"><h4>Engagements Profit</h4></div>
          <div class="m-mar-y">
            <h1>$ {{ engagementsProfit }}</h1>
            <h3>
              <b>Eth {{ engagementsProfitEthConvert }}</b>
            </h3>
          </div>
          <!-- <button class="n-mar-top">
            ...
          </button> -->
        </div>
      </article>
      <article class="brdr-1 dashed bg-clr-1 rev-box">
        <div class="center m-pad">
          <div class="m-mar-top"><h4 class="white">Collection Value</h4></div>
          <div class="m-mar-y">
            <h1 class="white">$ {{ collectionValue }}</h1>
            <h3 class="white">
              <b>Eth {{ collectionValueEthConvert }}</b>
            </h3>
          </div>
          <button class="n-mar-top">Flip NFT's</button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import HeadingsSwift from "../components/shared/HeadingsSwift.vue";
export default {
  components: {
    HeadingsSwift,
  },
  data() {
    return {
      displayProfit: "98,302.28",
      displayProfitEthConvert: "32.40",
      engagementsProfit: "34,232.28",
      engagementsProfitEthConvert: "357.70",
      collectionValue: "28,4322.28",
      collectionValueEthConvert: "347.40",
    };
  },
};
</script>

<style scoped lang="scss">
h1,
h3 {
  margin: 0 !important;
  white-space: nowrap;
}

h4 {
  font-weight: 400 !important;
}
</style>
