import { StarIcon } from '@heroicons/react/24/outline'

interface Props {
  food: {
    description: string
    dbSource: string
    type: 'meat' | 'fish' | 'vegetable' | 'fruit' | 'other'
    amount: number
    unit: 'g' | 'oz' | 'kg' | 'lbs' | 'unit'
  }
  summary?: boolean
}

const Food = ({ food, summary }: Props) => {
  if (!summary) console.log(food)
  return (
    <div className="p-6">
      <div className="flex w-full flex-col justify-center text-center">
        <h2 className="text-4xl font-bold">{food.description}</h2>
        <span>
          {food.amount}
          {food.unit}
        </span>
      </div>
      {!summary && (
        <>
          <div className="flex justify-between">
            <div className="flex w-full flex-col items-center justify-center">
              Protein
              <p>{'food.protein'}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              Fats
              <p>{'food.fat'}</p>
            </div>
            <div className="flex w-full flex-col items-center justify-center">
              Carbohydrates
              <p>{'food.carbohydrate'}</p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button className="flex items-center justify-center rounded-xl border-2 border-gray-500 p-2 text-gray-500">
              Add to diary
            </button>
            <button className="flex items-center justify-evenly rounded-xl bg-blue-500 p-2 text-white">
              <StarIcon className="h-6 w-6" />
              Save
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Food
