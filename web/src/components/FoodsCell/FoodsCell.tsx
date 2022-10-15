import type { FoodsQuery } from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
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
      amount
      unit
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
        <Link to={routes.food({ id: food.id })} key={food.id}>
          <Food food={food} summary />
        </Link>
      ))}
    </>
  )
}
