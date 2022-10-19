import { useCallback, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FoodSearch from 'src/components/FoodSearch'

const HomePage = () => {
  const [isSearching, setIsSearching] = useState(false)

  const handleChange = useCallback((val: boolean) => setIsSearching(val), [])
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div>
        <FoodSearch />
      </div>
    </>
  )
}

export default HomePage
