import type { FoodsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Food from 'src/components/Food'

export const QUERY = gql`
  query FoodsQuery {
    foods {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ foods }: CellSuccessProps<FoodsQuery>) => {
  return (
    <>
      {foods.map((food) => (
        <Food key={food.id} food={food} summary />
      ))}
    </>
  )
}
