import { ChangeEvent, useCallback, useState } from 'react'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { FoodQueryResult } from 'types/graphql'

import FoodsCell from 'src/components/FoodsCell'
interface Props {
  preview?: boolean
  stateChange: (value: boolean) => void
}

const Search = ({ preview, stateChange }: Props) => {
  const [query, setQuery] = useState('')
  const handleQueryInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.currentTarget.value) {
        setQuery(event.currentTarget.value)
      }
    },
    []
  )
  return (
    <div className="rounded-xl border-2 border-gray-500 p-2">
      <div className="flex gap-2">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input placeholder="Search..." onChange={handleQueryInput} />
      </div>
      {query && (
        <div className="flex flex-col gap-2 px-8">
          <FoodsCell query={query} />
        </div>
      )}
    </div>
  )
}

export default Search
