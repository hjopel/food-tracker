import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import type { FoodQueryResult } from 'types/graphql'
interface Props {
  query?: string
  preview?: boolean
  results?: FoodQueryResult
}

const Search = ({ query, preview, results }: Props) => {
  return (
    <div className="rounded-xl border-2 border-gray-500 p-2">
      <div className="flex gap-2">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input placeholder="Search..." />
      </div>
      {!preview && (
        <div className="flex flex-col gap-2">
          {results.foods.map((food) => (
            <div key={food.fdcId}>{food.description}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Search
