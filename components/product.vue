<template>
  <div>
  <b-card
    title="Card Title"
    v-bind:img-src="imgsrc"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{text}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>

<script>
export default {
    props:["text","imgsrc"]

}
</script>

<style>

</style>