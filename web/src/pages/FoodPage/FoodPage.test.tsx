import { render } from '@redwoodjs/testing/web'

import FoodPage from './FoodPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FoodPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FoodPage />)
    }).not.toThrow()
  })
})
