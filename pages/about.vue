<template>
  <div>

    <h2>About</h2>
    
    <form @submit.prevent="onSubmit">
    <input type="text" v-model="code"  placeholder="Enter Currency code..." />
    <button>Search</button>

  </form>
    <div> {{ data }} </div>
      

  </div>
</template> 
<script setup>
import { ref } from 'vue'

const code = ref("GBP")
var { data } = await useFetch(`/api/currency/${code.value}`);

const newCode = 'EUR'
async function onSubmit(newCode) {
  console.log(code.value)
  newCode = code.value
var { data } = await $fetch(`/api/currency/${code.value}`);

}
  // call server side script
//  data  = await useFetch(`/api/currency/DOL`)

</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>

