<template>
  <div class="display-setup n-pad">
    <h4>
      Enter Display URL:
      <input name="displayerPageUrl" type="text" v-model="displayerPageUrl" />
    </h4>

    <h4>
      Select Display Hashtags: #
      <select name="displayHashtags" v-model="hashtags">
        <option>#digital-art</option>
      </select>
      <img
        class="add-hashtag"
        src="@/assets/icons/add-hashtag-icon.svg"
        alt="Add Hashtag Icon"
      />
    </h4>

    <div class="code-box m-mar-y round">
      <p class="code center">
        &lt;iframe src="{{ displayerPageUrl }}/{{
          hashtags
        }}"&gt;&lt;/iframe&gt;
      </p>
    </div>

    <div class="m-mar-top">
      <div class="grid_1-3">
        <div class="center">
          <img
            class="pointer"
            style="margin-bottom: -0.3rem"
            src="@/assets/icons/delete-icon.svg"
            alt="Delete Display"
          />
          <h4 style="display: inline" class="pointer">Delete Display</h4>
        </div>
        <div>
          <button class="btn-fill center">Copy HTML Display Code</button>
        </div>
        <div>
          <button class="center">Save Display</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayerPageUrl: "",
      hashtags: "",
    };
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap");
.add-hashtag {
  margin-left: 0.5rem;
  margin-bottom: -0.25rem;
}

.control-items {
  display: inline-flex;
}

h4 {
  font-weight: 400 !important;
}

.code-box {
  padding: 0.75rem;
  background-color: $grey;
}

.code {
  font-family: "JetBrains Mono", monospace;
  color: $black;
  font-size: 500;
}
</style>
