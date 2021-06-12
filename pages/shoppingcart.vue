<template>
<div>
    <!-- <div class="row">
        <div class="col-md">
            <div class="cart_title">購物清單</div>
            <div class="cart_items">
                <ul class="cart_list">
                    <li class="cart_item clearfix">
                        <div class="cart_item_image"><img src="~/assets/Loccitane2021.jpg" alt=""></div>
                        <div class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                            <div class="cart_item_name cart_info_col">
                                <div class="cart_item_title">Name</div>
                                <div class="cart_item_text">歐舒丹</div>
                            </div>

                            <div class="cart_item_quantity cart_info_col">
                                <div class="cart_item_title">Quantity</div>
                                <div class="cart_item_text">1</div>
                            </div>
                            <div class="cart_item_price cart_info_col">
                                <div class="cart_item_title">Price</div>
                                <div class="cart_item_text">₹22000</div>
                            </div>
                            <div class="cart_item_total cart_info_col">
                                <div class="cart_item_title">Total</div>
                                <div class="cart_item_text">₹22000</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="order_total">
                <div class="order_total_content text-md-right">
                    <div class="order_total_title">Order Total:</div>
                    <div class="order_total_amount">NT11200</div>
                </div>
            </div>
            <div class="cart_buttons">
                <a class="btn btn-secondary btn-lg btn-block" href="index.html" role="button">繼續購物</a>
                <br>
                <a class="btn btn-light" href="checkout.html">結帳</a>

            </div>

        </div>

    </div> -->

    <div class="row">
        <ul>
            <li v-for="(product,index) in shoppingList" v-bind:key="index">{{product.id}} - {{product.count}}</li>
        </ul>

    </div>
</div>
</template>

<script>
export default {

    computed:{
        shoppingList:function(){
            return this.$store.state.cart;
        }
    }

}
</script>

<style>

</style>
