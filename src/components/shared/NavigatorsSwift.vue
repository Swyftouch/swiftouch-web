<template>
  <div>
    <div class="revenue-icon pointer">
      <router-link to="revenue">
        <img src="@/assets/icons/revenue-icon.svg" alt="Revenue Icon" />
      </router-link>
    </div>

    <div class="dashboard-icon pointer">
      <router-link to="/dashboard">
        <img src="@/assets/icons/dashboard-icon.svg" alt="Dashboard Icon" />
      </router-link>
    </div>

    <SupportSwift />
    <div class="headline">
      <div class="grid_1-3">
        <!-- Greeting -->
        <div class="greeting">
          <h4 style="margin-top: 0.7rem" class="no-mar-bottom">
            {{ greeting() }},
          </h4>
          <input
            class="username no-mar-top"
            type="text"
            placeholder="What's your name?"
          />
        </div>

        <!-- Logo -->
        <div class="center">
          <router-link to="/dashboard">
            <img
              class="logo"
              src="@/assets/logos/swiftouch-logo.svg"
              alt="Swiftouch-Logo"
            />
          </router-link>
        </div>

        <!-- CTA's -->
        <div class="right">
          <router-link to="/displays">
            <button v-if="$route.name === 'engagements'">
              Display NFT's & Get Paid
            </button>
          </router-link>
          <router-link to="/engagements">
            <button v-if="$route.name === 'collection'">Flip NFT's</button>
          </router-link>
          <router-link to="/engagements">
            <button v-if="$route.name === 'displays'">Sell NFT's Now</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="logout-icon">
      <router-link to="/">
        <img src="@/assets/icons/logout-icon.svg" alt="Logout Icon" />
      </router-link>
    </div>
  </div>
</template>

<script>
import SupportSwift from "./SupportSwift.vue";

export default {
  components: {
    SupportSwift,
  },
  methods: {
    greeting() {
      var myDate = new Date();
      var hrs = myDate.getHours();
      var greet;
      if (hrs < 12) greet = "Morning";
      else if (hrs >= 12 && hrs <= 17) greet = "Hey";
      else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
      return (this.innerHTML = greet);
    },
  },
};
</script>

<style scoped lang="scss">
@include respond(mobitab) {
  .headline {
    margin-top: 13rem;
  }
}

.revenue-icon {
  position: fixed;
  top: 1.2rem;
  left: 1rem;
  z-index: 2;
}

.dashboard-icon {
  position: fixed;
  top: 1.2rem;
  right: 1rem;
  z-index: 2;
}

.logout-icon {
  position: fixed;
  bottom: 1.2rem;
  left: 1rem;
  z-index: 2;
}

.headline {
  @include respond(mobile) {
    padding: 0vh 3vw;
  }
  @include respond(tablet) {
    padding: 0vh 9vw;
  }
  @include respond(laptop) {
    padding: 0vh 12vw;
  }
  @include respond(desktop) {
    padding: 0vh 14vw;
  }
  margin: auto;
  display: block;
  height: auto;
}

h4 {
  font-weight: 400 !important;
}

::-webkit-input-placeholder {
  background: linear-gradient(
    to right,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

::-moz-placeholder {
  background: linear-gradient(
    to right,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:-ms-input-placeholder {
  background: linear-gradient(
    to right,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:-moz-placeholder {
  background: linear-gradient(
    to right,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.username {
  background: linear-gradient(
    to right,
    #26c6da,
    #43a047,
    #eeff41,
    #f9a825,
    #ff5722,
    #ef5350,
    #f48fb1,
    #7e57c2,
    #2196f3
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @include respond(mobile) {
    font-size: calc(24px + 4 * (100vw - 320px) / 480);
  }
  @include respond(tablet) {
    font-size: calc(26px + 4 * (100vw - 480px) / 768);
  }
  @include respond(laptop) {
    font-size: calc(26px + 6 * (100vw - 768px) / 1366);
  }
  @include respond(desktop) {
    font-size: calc(26px + 6 * (100vw - 1366px) / 2400);
  }
  font-weight: 400 !important;
  border-bottom: 2px solid $bg-clr !important;
}
</style>
