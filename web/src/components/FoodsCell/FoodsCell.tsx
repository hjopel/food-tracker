import { useState } from 'react'

import type { FoodQueryResult } from 'types/graphql'

import { routes, Link } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FoodPreview from '../FoodPreview/FoodPreview'

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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ getFoods }: CellSuccessProps<FoodQueryResult>) => {
  console.log(getFoods)
  return (
    <>
      {getFoods.foods.map((food) => (
        <div
          // onClick={() =>
          //   setOpened(opened === food.fdcId ? undefined : food.fdcId)
          // }
          key={food.fdcId}
        >
          <FoodPreview food={food} />
        </div>
      ))}
    </>
  )
}
