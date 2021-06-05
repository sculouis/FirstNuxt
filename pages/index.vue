<template>
<div class="mt-1">
    <b-carousel id="carousel-1" v-model="slide" :interval="2000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <!-- Text slides with image -->
        <b-carousel-slide caption="自已可定義標題" text="說明產品大綱" img-src="~/assets/index1.jpg"></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="~/assets/index2.jpg">
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="~/assets/index3.jpg"></b-carousel-slide>

        <!-- Slides with img slot -->        
    </b-carousel>
    <br>
    <b-jumbotron header="讓我們一起變美" lead="讓世界更美好">
        <p>寵愛自己!</p>
        <b-button variant="primary" href="#">More Info</b-button>
    </b-jumbotron>

</div>
</template>

<script>
export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    }
}
</script>
