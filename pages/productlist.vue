<template>
<div>
    <h6>
        護手霜商品總頁面
    </h6>
    <br>
    <div class="row">
        <div class="col">
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" v-model="searchText" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" v-on:click.prevent="searchProducts">Search</button>
            </form>
        </div>
    </div>
    <div class="row m-1" v-for="products,index in products2" v-bind:key="index">
        <div class="col" v-for="product,index in products" v-bind:key="index">
            <product v-bind:text="product.text" v-bind:imgsrc="product.imgsrc" v-bind:title="product.title">
            </product>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            products1: [{
                    text: "護手霜A1款",
                    imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
                },
                {
                    text: "護手霜A2款",
                    imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
                },
                {
                    text: "護手霜A3款",
                    imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
                },
                {
                    text: "護手霜B1款",
                    imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
                },
                {
                    text: "護手霜B2款",
                    imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
                },
                {
                    text: "護手霜B3款",
                    imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
                }
            ],
            products2: [
                [{
                        text: "護手霜A1款",
                        imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
                        title:"Title1"
                    },
                    {
                        text: "護手霜A2款",
                        imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
                        title:"Title2"
                    },
                    {
                        text: "護手霜A3款",
                        imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
                        title:"Title3"

                    }
                ],
                [{
                        text: "護手霜B1款",
                        imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
                        title:"Title1"
                    },
                    {
                        text: "護手霜B2款",
                        imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
                        title:"Title1"
                    },
                    {
                        text: "護手霜B3款",
                        imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
                        title:"Title1"
                    }
                ]
                
            ],
            searchText: ""

        };

    },
    methods: {
        //將陣列幾個分一組
        sliceArray: function (arr, size) {
            var arr2 = [];
            for (var i = 0; i < arr.length; i = i + size) {
                arr2.push(arr.slice(i, i + size));
            }
            return arr2;
        },
        //尋找相關產品
        searchProducts: function () {
            console.log(this.searchText);

        }
    },
    computed: {
        productlist1: function () {
            return this.sliceArray(this.products1, 3)
        },
        productlist2: function () {
            var vm = this;
            var arr = [];
            if (vm.searchText != ""){
                this.products1.forEach(function (item) {
                    if (item.text.indexOf(vm.searchText) > 0) {
                        arr.push(item);
                    }
                });
            }else{
                arr = this.products1;
            }
            return this.sliceArray(arr, 3)
        },
    }
}
</script>

<style>

</style>
