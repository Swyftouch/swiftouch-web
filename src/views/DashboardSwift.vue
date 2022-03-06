<template>
  <div>
    <HeadingsSwift />

    <div class="grid_1-3">
      <article class="dashed brdr-1 box center m-pad">
        <h1>
          NFT <br />
          Displays
        </h1>
        <router-link to="/displays">
          <button class="m-mar-top">
            Setup & Manage <br />
            NFT Displays
          </button>
        </router-link>
      </article>
      <article class="dashed brdr-1 box center m-pad">
        <h1>
          NFT <br />
          Engagements
        </h1>
        <router-link to="/engagements">
          <button class="m-mar-top">
            Create & Manage <br />
            Engagements
          </button>
        </router-link>
      </article>
      <article class="dashed brdr-1 box center m-pad">
        <h1>
          Your <br />
          Collection
        </h1>
        <router-link to="/collection">
          <button class="m-mar-top">
            View Your <br />
            Collection
          </button>
        </router-link>
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
};
</script>
