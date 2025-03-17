export default  defineEventHandler(async (event) => {

const { code } = event.context.params

  const { currencyAPIKey } = useRuntimeConfig()

  const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyAPIKey}`

  const { data } = await $fetch(uri) 

  return data

})

// http://localhost/3001/_nuxt/server/api/currency/[code].js