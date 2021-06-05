<template>
<div>
    <b-card v-bind:title="title" v-bind:img-src="imgsrc" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <b-card-text>
            {{text}}
        </b-card-text>

        <b-button v-on:click="add()" variant="primary">＋</b-button>
        <p>{{ count }}</p>
        <b-button v-on:click="sub()" variant="primary">-</b-button>
        <b-button variant="danger">加入購物車</b-button>
    </b-card>
</div>
</template>

<script>
export default {
    props: ["text", "imgsrc", "title"],
    data: function () {
        return {
            count: 1,
            msg: ""
        }
    },
    methods: {
        add: function () {
            this.count = this.count + 1;
        },
        sub: function () {
            if (this.count > 1) {
                this.count = this.count - 1;
            } else {
                this.count = 1
            }

        }

    }
}
</script>

<style>

</style>
