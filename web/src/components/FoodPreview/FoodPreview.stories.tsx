// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FoodPreview> = (args) => {
//   return <FoodPreview {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FoodPreview from './FoodPreview'

export const fullInfo = () => {
  return (
    <FoodPreview
      food={{
        fdcId: '2038064',
        description: 'CHICKEN',
        brandName: 'KEYSTONE',
        ingredients: 'CHICKEN, SEA SALT.',
        foodNutrients: [
          {
            nutrientName: 'Energy',
            unitName: 'KCAL',
            value: 107,
          },
        ],
      }}
    />
  )
}
export const minimalInfo = () => {
  return (
    <FoodPreview
      food={{
        fdcId: '1099862',
        description: 'Chicken salad or chicken spread sandwich',
        brandName: null,
        ingredients: null,
        foodNutrients: [
          {
            nutrientName: 'Energy',
            unitName: 'KCAL',
            value: 232,
          },
        ],
      }}
    />
  )
}

export default {
  title: 'Components/FoodPreview',
  component: FoodPreview,
} as ComponentMeta<typeof FoodPreview>
