<template>
<div>
    <b-card :title="title" :img-src="imgsrc" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
        <b-card-text>
            <p>{{text}}</p>
            <p>{{price}}</p>
        </b-card-text>
        <div class="m-2">
            <b-button v-on:click="add()" variant="primary">＋</b-button>
            <span>
                <strong>
                    {{ count }}
                </strong>
            </span>
            <b-button v-on:click="sub()" variant="primary">-</b-button>
        </div>
        <b-button variant="danger" @click="addCart">加入購物車</b-button>
    </b-card>
</div>
</template>

<script>
export default {
    props: ["id", "text", "imgsrc", "title","price"],
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

        },
        addCart() {
            var yes = confirm('你確定嗎？');
            if (yes) {
                this.$store.commit('addProduct', {
                    id: this.id,
                    count: this.count,
                    text: this.text,
                    price: this.price,
                    imgsrc: this.imgsrc,
                    title: this.title
                })
            } 
        }

    }
}
</script>

<style>

</style>
