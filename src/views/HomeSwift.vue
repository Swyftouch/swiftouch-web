<template>
  <div>
    <div class="home-header center">
      <div class="m-mar-bottom m-pad-top">
        <div class="n-pad-top">
          <img class="home-heading" src="@/assets/images/home-heading.svg" />
        </div>
        <!-- <h1>
            The internet's biggest decentralized marketspace
          </h1> -->
      </div>
      <!-- <button v-if="!isMetaConnected" @click="connectCollectorMetaMask">
        Signin with MetaMask
      </button>
      <button v-else>Signed In from MetaMask</button> -->
      <!-- {{ isMetaConnected }}
      {{ metaAccount }} -->
      <h3>Sell, Collect & Display crypto tokens across the internet</h3>
      <h4>#nft</h4>
      <h4>#vouchers</h4>
      <h4>#tickets</h4>
      <h4>#bundles</h4>
      <h4>#collectibles</h4>
      <div class="m-pad-y m-mar-y">
        <div class="grid_1-2 home-btns">
          <!-- Creator Initial Connect Buttons -->
          <button
            v-if="hideCreator"
            class="home-btn m-mar-bottom"
            @click="(showCreator = !showCreator), (hideCreator = !hideCreator)"
          >
            Sell Your NFT's Now
          </button>

          <!-- Displayer Wallet Connect Buttons -->
          <button
            v-show="showCreator"
            v-if="!isMetaConnected"
            @click="connectCreatorMetaMask"
            class="home-btn black m-mar-bottom"
          >
            Connect with
            <img
              class="wallet-logos"
              src="@/assets/logos/metamask-logo.svg"
              alt="MetaMask"
            />
          </button>

          <!-- Displayer Initial Connect Buttons -->
          <button
            v-if="hideDisplayer"
            class="home-btn btn-fill"
            @click="
              (showDisplayer = !showDisplayer), (hideDisplayer = !hideDisplayer)
            "
          >
            Display NFT's & Get Paid
          </button>

          <!-- Displayer Wallet Connect Buttons -->
          <button
            v-show="showDisplayer"
            v-if="!isMetaConnected"
            @click="connectDisplayerMetaMask"
            class="home-btn black m-mar-bottom"
          >
            Connect with
            <img
              class="wallet-logos"
              src="@/assets/logos/metamask-logo.svg"
              alt="MetaMask"
            />
          </button>
        </div>
      </div>

      <div class="home-collector w-pad-top">
        <p v-if="hideCollector" class="txt-center">
          An NFT collector?
          <span
            @click="
              (showCollector = !showCollector), (hideCollector = !hideCollector)
            "
            class="underline pointer"
            >View your collection</span
          >
        </p>
        <p v-show="showCollector">
          Connect via
          <span v-if="!isMetaConnected" @click="connectCollectorMetaMask">
            <img
              class="wallet-logos"
              src="@/assets/logos/metamask-logo.svg"
              alt="MetaMask"
            />
          </span>
        </p>
      </div>
    </div>

    <div class="w-pad-top center">
      <h2>Everything Decentralized</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCreator: false,
      hideCreator: true,
      showDisplayer: false,
      hideDisplayer: true,
      showCollector: false,
      hideCollector: true,

      isMetaConnected: false,
      metaAccount: "",
    };
  },
  mounted() {
    if (typeof window.ethereum !== "undefined") {
      this.isMetaConnected =
        window.ethereum.selectedAddress == null ? false : true;
      window.ethereum.on("connect", () => {
        if (window.ethereum.selectedAddress) {
          this.isMetaConnected = true;
          this.metaAccount = window.ethereum.selectedAddress;
        }
      });
      window.ethereum.on("disconnect", () => {
        this.isMetaConnected = false;
        this.metaAccount = "";
      });
      window.ethereum.on("accountsChanged", () => {
        if (window.ethereum.selectedAddress) {
          this.metaAccount = window.ethereum.selectedAddress;
        } else {
          this.metaAccount = "";
          this.isMetaConnected = false;
        }
      });
    }
  },
  methods: {
    async connectCreatorMetaMask() {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
      } else {
        alert("Please Install MetaMask");
        return;
      }
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((e) => {
          this.isMetaConnected = true;
          this.metaAccount = e[0];
          this.$router.push("/engagements");
          console.log(this.metaAccount);
        });
    },

    async connectDisplayerMetaMask() {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
      } else {
        alert("Please Install MetaMask");
        return;
      }
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((e) => {
          this.isMetaConnected = true;
          this.metaAccount = e[0];
          this.$router.push("/displays");
          console.log(this.metaAccount);
        });
    },
    async connectCollectorMetaMask() {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask is installed!");
      } else {
        alert("Please Install MetaMask");
        return;
      }
      await window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((e) => {
          this.isMetaConnected = true;
          this.metaAccount = e[0];
          this.$router.push("/collection");
          console.log(this.metaAccount);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.wallet-logos {
  margin-bottom: -0.5rem;
}

.black {
  border: 2px solid $black;
}
.home-header {
  padding-top: 18vh;
  height: 100%;
}

.home-btns {
  width: 640px;
  margin-right: auto !important;
  margin-left: auto !important;
}

.home-btn {
  margin-right: auto !important;
  margin-left: auto !important;
}

.home-heading {
  @include respond(mobile) {
    font-size: calc(30px + 6 * (100vw - 320px) / 480);
  }
  @include respond(tablet) {
    font-size: calc(36px + 6 * (100vw - 480px) / 768);
  }
  @include respond(laptop) {
    font-size: calc(36px + 10 * (100vw - 768px) / 1366);
  }
  @include respond(desktop) {
    font-size: calc(50px + 8 * (100vw - 1366px) / 2400);
  }
}
</style>
