import type { ComponentMeta } from '@storybook/react'

import FoodPage from './FoodPage'

export const generated = () => {
  return <FoodPage />
}

export default {
  title: 'Pages/FoodPage',
  component: FoodPage,
} as ComponentMeta<typeof FoodPage>
