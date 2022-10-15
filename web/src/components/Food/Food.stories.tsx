// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Food> = (args) => {
//   return <Food {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Food from './Food'

export const generated = () => {
  return (
    <Food
      food={{
        name: 'Chicken breast',
        dbSource: 'Storybook test',
        protein: 20,
        fat: 2,
        carbohydrate: 0.3,
        type: 'meat',
        amount: 100,
        unit: 'g',
      }}
    />
  )
}

export default {
  title: 'Components/Food',
  component: Food,
} as ComponentMeta<typeof Food>
