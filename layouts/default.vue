<template>
<div>
    <div class="container">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
       <NuxtLink to="/aboutus"><a class="btn btn-light" href="#">最新活動</a></NuxtLink>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="btn btn-light" href="limited.html">季節限定 <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item active">
                  <NuxtLink to="/products">
                    <a class="btn btn-light" href="products.html">經典商品 <span class="sr-only">(current)</span></a>
                  </NuxtLink>
                </li>

                <li class="nav-item active">
                    <a class="btn btn-light" href="products.html">部落格 <span class="sr-only">(current)</span></a>
                </li>

            </ul>
            <form class="form-inline">
                <a class="btn btn-light" href="login.html">會員登入</a>

                <a class="btn btn-outline-secondary" href="newmember.html" role="button">會員註冊</a>

            </form>
        </div>
    </nav>
        <Nuxt />
    </div>
</div>
</template>
