import type { FindFoodQuery, FindFoodQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Food from 'src/components/Food'
export const QUERY = gql`
  query FindFoodQuery($id: Int!) {
    food: food(id: $id) {
      id
      name
      protein
      fat
      carbohydrate
      type
      amount
      unit
      dbSource
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindFoodQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  food,
}: CellSuccessProps<FindFoodQuery, FindFoodQueryVariables>) => {
  return <Food food={food} />
}
