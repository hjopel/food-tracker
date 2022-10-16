import type { ComponentMeta } from '@storybook/react'

import HomePage from './HomePage'

export const searchPreview = () => {
  return <HomePage />
}

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>
