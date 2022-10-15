import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FoodCell from 'src/components/FoodCell'

interface Props {
  id: number
}
const FoodPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Food" description="Food page" />

      <FoodCell id={id} />
    </>
  )
}

export default FoodPage
