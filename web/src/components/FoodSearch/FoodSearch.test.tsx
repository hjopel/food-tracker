import { render } from '@redwoodjs/testing/web'

import FoodSearch from './FoodSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FoodSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FoodSearch />)
    }).not.toThrow()
  })
})
