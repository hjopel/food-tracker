import { render } from '@redwoodjs/testing/web'

import FoodPreview from './FoodPreview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FoodPreview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FoodPreview />)
    }).not.toThrow()
  })
})
