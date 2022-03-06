<template>
  <div>
    <!-- Collection -->
    <div class="grid_2-3" v-if="$route.name === 'collection'">
      <h2>Your NFT Collection</h2>
      <InfoSwift>
        Your NFT collections holds all the NFT's you've bought on the Swiftouch
        network.
      </InfoSwift>
      <SearchSwift />
    </div>

    <!-- NFT Engagements -->
    <div class="grid_2-3" v-if="$route.name === 'engagements'">
      <h2>NFT Engagements</h2>
      <InfoSwift>
        Import your NFT into an Engagement. NFT Engagements are displayed on
        websites on the display network. Through NFT Engagements users on these
        websites can engage with your NFT's by viewing, bidding or buying them
        right there and then, using their Crypto wallets.</InfoSwift
      >
      <SearchSwift />
    </div>

    <!-- Your NFT Displays -->
    <div class="grid_2-3" v-if="$route.name === 'displays'">
      <h2>Your NFT Displays</h2>
      <InfoSwift>
        Set-up an NFT Display. NFT displays are displayed on your website
        through the display network. These displays, show NFT's to your users
        through what we call NFT Engagements. Your users can now view, bid or
        buy these NFT's on your website, without having to navigate away, using
        their Crypto wallets.
      </InfoSwift>
      <SearchSwift />
    </div>

    <!-- Your Dashboard -->
    <div class="grid_2-3" v-if="$route.name === 'dashboard'">
      <h2>Your Dashboard</h2>
      <div></div>
      <div></div>
    </div>

    <!-- Your Revenue -->
    <div class="grid_2-3" v-if="$route.name === 'revenue'">
      <h2>Your Revenue</h2>
      <InfoSwift
        >Your revenue shows what you've made through Swiftouch.
      </InfoSwift>
      <div></div>
    </div>
  </div>
</template>

<script>
import InfoSwift from "./InfoSwift.vue";
import SearchSwift from "./SearchSwift.vue";
export default {
  components: {
    InfoSwift,
    SearchSwift,
  },
};
</script>

<style scoped lang="scss">
//
</style>
