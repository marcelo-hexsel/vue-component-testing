<template>
  <div class="col-md-4 col-sm-12 item item1">
    <div class="item-image">
      <img :src="imageUrl" />
    </div>
    <button class="btn btn btn-secondary item-button" @click="vote()">
      {{ name }}
    </button>
    <div class="item-percentual">{{ percentual }} ({{ voteCount }} votos)</div>
  </div>
</template>

<script>
export default {
  props: {
    option: Number,
    name: String,
    imageUrl: String,
    percentual: String,
    voteCount: Number,
  },
  methods: {
    vote() {
      this.$emit("voted", {
        option: this.option,
      });
    },
  },
};
</script>

<style></style>
