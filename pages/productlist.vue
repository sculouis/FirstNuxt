<template>
<div>
    <h6>
        護手霜商品總頁面
    </h6>
    <br>
    <div class="row" v-for="products,index in productlist" v-bind:key="index">
        <div class="col" v-for="product,index in products" v-bind:key="index">
            <product v-bind:text="product.text" v-bind:imgsrc="product.imgsrc">        
            </product> 
        </div>
    </div>
</div>
</template>

<script>
export default {
    data:function() {
    return {
        products:
    [{
        text:"護手霜A1款",
        imgsrc:"https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
    },
    {
        text:"護手霜A1款",
        imgsrc:"https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
    },
        {
        text:"護手霜A1款",
        imgsrc:"https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg"
    },
        {
        text:"護手霜B1款",
        imgsrc:"https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
    },
            {
        text:"護手霜B1款",
        imgsrc:"https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
    },
        {
        text:"護手霜B1款",
        imgsrc:"https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg"
    }
    ]
    }; 
    
    },
    methods:{
        //將陣列幾個分一組
        sliceArray:function(arr, size) {
            var arr2 = [];
            for(var i=0; i<arr.length; i=i+size){
                arr2.push(arr.slice(i,i+size));
            }
            return arr2;
        }
    },
    computed:{
        productlist:function(){
            return this.sliceArray(this.products,2)
        }
    }
}
</script>

<style>

</style>