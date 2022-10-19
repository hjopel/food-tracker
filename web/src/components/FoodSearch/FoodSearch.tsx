import { useState } from 'react'

import FoodsCell from 'src/components/FoodsCell'

const FoodSearch = () => {
  const [query, setQuery] = useState('')
  return <div>{query && <FoodsCell query={query} />}</div>
}

export default FoodSearch
