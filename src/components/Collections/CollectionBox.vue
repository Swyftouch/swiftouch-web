<template>
  <div>
    <article class="box center pointer">
      <img
        class="round blockImg"
        @click="(mutateBlock = !mutateBlock), resizeImg()"
        id="blockImg"
        src="https://picsum.photos/360/360"
        alt="NFT"
      />

      <img
        v-if="fullviewImg"
        class="full-view-img"
        src="https://picsum.photos/360/360"
        alt="NFT"
      />

      <div class="center" v-if="mutateBlock">
        <h3>{{ nftTitle }}</h3>
        <p class="no-mar-y">{{ nftDescription }}</p>
        <p class="n-mar-y">
          <b>Contract Address</b> <br />
          {{ contractAddress }}
        </p>
        <button @click="fullviewImg = !fullviewImg">View NFT</button>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mutateBlock: false,
      nftTitle: "MetaMonk",
      nftDescription: "A metallic creature from the Metaverse",
      fullviewImg: false,
      contractAddress: "0x4c11249814f11b9346808179cf06e71ac328c1b5",
    };
  },
  methods: {
    resizeImg() {
      let blockImg = document.getElementById("blockImg");
      blockImg.style.height = "80px";
      blockImg.style.marginTop = "2rem";
      blockImg.style.borderRadius = "10px";
    },
  },
  mounted() {
    window.onkeyup = function (event) {
      if (event.keyCode == 27) {
        this.fullviewImg = false;
      }
    };
  },
};
</script>

<style scoped lang="scss">
.full-view-img {
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>
