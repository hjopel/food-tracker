import type { FoodQuery } from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Food from 'src/components/Food'

export const QUERY = gql`
  query FoodsQuery($query: String!) {
    foods(query: $query) {
      foods {
        fdcId
        description
        brandName
        ingredients
        foodNutrients {
          nutrientName
          unitName
          value
        }
      }
      page
      query
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ foods }: CellSuccessProps<FoodsQuery>) => {
  console.log(foods.foods)
  return (
    <>
      {foods.foods.map((food) => (
        // <Link to={routes.food({ id: food.id })} key={food.id}>
        <Food food={food} summary key={food.fdcId} />
        // </Link>
      ))}
    </>
  )
}
