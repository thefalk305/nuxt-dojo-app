<template>
  <div>
    <div class="grid grid-cols-4 gap-5" >
      <div v-for="p in products" :key="p.id">
        <ProductCard :product="p" />
      </div>

    </div>

  </div>
</template>

<script setup>
// import { useFetch } from './nuxt/dist/app';

definePageMeta({
  layout: 'products'
})

// fetch teh products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
console.log(products);

useHead({
  title: 'Nuxt Dojo | Merch',
      meta: [
        { name: 'description', content: 'Nuxt 3 Merch' }
      ]

})

</script>

<style scoped>
</style>