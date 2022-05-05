<template>
  <div class="documentationframe">
    <b-card
      :title="title"
      :img-src="picture"
      img-alt="Image"
      img-right
      style="max-width: 100%"
      class="mb-2"
    >
      <b-card-text>
        {{ description }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    picture: String,
    description: String,
  },
};
</script>

<style lang="scss">
.documentationframe {
  text-align: left;
  color: black;
  margin: auto;
  margin-bottom: 15px;
  max-width: 80%;
  object-fit: cover;

  h1 {
    color: black;
  }
  img {
    max-width: 25%;
    object-fit: contain;
    padding: 10px;
  }
}
</style>
