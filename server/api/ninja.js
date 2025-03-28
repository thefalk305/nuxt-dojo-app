export default  defineEventHandler(async (event) => {

  // // handle query params
  // const { name } =  getQuery(event)

  // // handle post data
  // const { age } = await readBody(event)
  // get 'currencyAPI key' from 'nuxt.config.ts'
  const { currencyAPIKey } = useRuntimeConfig()

  // currency api call with private const key
  const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyAPIKey}`)

  return data
  
}) 
    // was return { message: `Hello, ${name}! You are ${age} years old.` }
