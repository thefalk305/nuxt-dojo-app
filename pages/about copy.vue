<template>
  <div>

    <h2>About</h2>
    
    <form @submit.prevent="onSubmit">
    <input type="text" v-model="code"  placeholder="Currency code..." />
    <button>Enter Code</button>

  </form>
    <div> {{ data }} </div>
      

  </div>
</template> 
<script setup>
import { ref } from 'vue'

const code = ref("GBP")

function onSubmit() {
console.log(code)
}

  // call server side script
  const { data } = await useFetch('/api/currency/GBP')

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