<template>
<div>
    <div class="container">
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <NuxtLink to="/aboutus">
                <a class="btn btn-light" href="#">最新活動</a>
            </NuxtLink>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <NuxtLink to="/limited">
                            <a class="btn btn-light" href="#">季節限定 <span class="sr-only">(current)</span></a>
                        </NuxtLink>
                    </li>

                    <li class="nav-item active">
                        <NuxtLink to="/productlist">
                            <a class="btn btn-light" href="#">經典商品 <span class="sr-only">(current)</span></a>
                        </NuxtLink>
                    </li>

                    <li class="nav-item active">
                        <a class="btn btn-light" href="products.html">部落格 <span class="sr-only">(current)</span></a>
                    </li>

                </ul>
                <div class="form-inline">
                    <NuxtLink to="/shoppingcart">
                        <a class="btn btn-success" href="#" role="button">購物清單</a>
                    </NuxtLink>
                    <NuxtLink to="/login">
                        <a class="btn btn-light" href="#">會員登入</a>
                    </NuxtLink>
                    <a class="btn btn-outline-secondary" href="newmember.html" role="button">會員註冊</a>
                </div>
            </div>
        </nav>
        <Nuxt />
    </div>
</div>
</template>

<script>
export default {
    computed: {
        member() {
            return this.$store.state.member;
        }
    }
}
</script>
