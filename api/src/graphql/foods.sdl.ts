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
    publishedDate: String
    brandOwner: String
    brandName: String
    ingredients: String
    foodCategory: String
    foodNutrients: [FoodNutrients]
  }
  type FoodQueryResult {
    query: String!
    foods: [FoodResult]
    page: Int
  }

  type Query {
    foods(query: String!): FoodQueryResult! @skipAuth
  }
`
