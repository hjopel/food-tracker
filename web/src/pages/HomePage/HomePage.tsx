import { useCallback, useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Search from 'src/components/Search/Search'

const HomePage = () => {
  const [isSearching, setIsSearching] = useState(true)

  const handleChange = useCallback((val: boolean) => setIsSearching(val), [])
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div>
        <Search preview={!isSearching} stateChange={handleChange} />
      </div>
    </>
  )
}

export default HomePage
