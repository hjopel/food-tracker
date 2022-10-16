import { fetch } from 'cross-undici-fetch'

export const foods = async ({ query }: { query: string }) => {
  const response = await fetch(
    ` https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${
      process.env.FOOD_DB_KEY
    }&query=${encodeURI(query)}`
  )
  const json = await response.json()
  const retVal = {
    query,
    foods: json.foods,
    page: json.foodSearchCriteria.pageNumber,
  }
  console.log(retVal)
  return {
    query,
    foods: json.foods,
    page: json.foodSearchCriteria.pageNumber,
  }
}
