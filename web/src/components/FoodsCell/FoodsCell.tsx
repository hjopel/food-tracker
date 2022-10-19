import { useState } from 'react'

import type { FoodQuery } from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Food from 'src/components/Food'

export const QUERY = gql`
  query FoodsQuery($query: String!) {
    getFoods(query: $query) {
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

export const Success = ({ getFoods }: CellSuccessProps<FoodsQuery>) => {
  const [opened, setOpened] = useState()
  return (
    <>
      {getFoods.foods.map((food) => (
        <div
          // onClick={() =>
          //   setOpened(opened === food.fdcId ? undefined : food.fdcId)
          // }
          key={food.fdcId}
        >
          <Food food={food} summary={opened !== food.fdcId} />
        </div>
      ))}
    </>
  )
}
