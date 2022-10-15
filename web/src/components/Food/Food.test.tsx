import { render, screen } from '@redwoodjs/testing'

import Food from './Food'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Food', () => {
  it('renders successfully', () => {
    const food = {
      name: 'Chicken breast',
      dbSource: 'Storybook test',
      protein: 20,
      fat: 2,
      carbohydrate: 0.3,
      type: 'meat',
      amount: 100,
      unit: 'g',
    }
    render(<Food food={food} />)

    expect(screen.getByText(food.name)).toBeInTheDocument()
    expect(screen.getAllByText(food.protein)).toBeInTheDocument()
    expect(screen.getByText(food.fat)).toBeInTheDocument()
    expect(screen.getByText(food.carbohydrate)).toBeInTheDocument()
    expect(screen.getByText(food.amount)).toBeInTheDocument()
    expect(screen.getByText(food.unit)).toBeInTheDocument()
  })
})
