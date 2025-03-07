<template>
  <div>

    
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque impedit unde consequuntur placeat aliquid eaque! Unde iste distinctio cupiditate, amet obcaecati quasi ducimus porro, laboriosam non id nostrum eaque iusto. </p>
    <div> {{ data }} </div>
      

  </div>
</template> 
<script setup>
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