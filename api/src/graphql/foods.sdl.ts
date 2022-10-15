export const schema = gql`
  type FoodNutrients {
    nutrientId: Int
    nutrientName: String
    unitName: String
    value: Float
  }
  type FoodResult {
    fdcId: Int
    description: String
    foodNutrients: [FoodNutrients]
  }
  type FoodQueryResult {
    query: String!
    foods: [FoodResult]
    page: Int
  }

  type Query {
    getFoods(query: String!): FoodQueryResult! @skipAuth
  }
`