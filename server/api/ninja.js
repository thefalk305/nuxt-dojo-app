export default  defineEventHandler(async (event) => {

  // // handle query params
  // const { name } =  getQuery(event)

  // // handle post data
  // const { age } = await readBody(event)

  // currency api call with private const key
  const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_aquqM357jrUTJAQGREKPYZJzDe8h7zd1uGpKjqxW')

  return data
  
}) 
    // was return { message: `Hello, ${name}! You are ${age} years old.` }
