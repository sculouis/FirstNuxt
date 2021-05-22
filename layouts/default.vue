<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">
          <NuxtLink to="/">Home</NuxtLink>
        </b-nav-item>
        <b-nav-item href="#">
          <NuxtLink to="/about">About</NuxtLink>
        </b-nav-item>
        <b-nav-item href="#">
          <NuxtLink to="/productlist">Products</NuxtLink>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

