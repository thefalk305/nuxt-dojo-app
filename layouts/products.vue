<template>
  <div>
    <footer  class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4" >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
    </footer>

    <header class="shadow-sm bg-white" >
      <nav class="container mx-auto p-4" >
        <NuxtLink to="/" class="font-bold" >Nuxt DOJO Merch</NuxtLink>
      </nav>
    </header>

    <!-- output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>

  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
div {  
  padding-left: 20px;
  margin-top: 20px;
}

</style>