import { StarIcon } from '@heroicons/react/24/outline'

interface Props {
  food: {
    name: string
    dbSource: string
    protein: number
    fat: number
    carbohydrate: number
    type: 'meat' | 'fish' | 'vegetable' | 'fruit' | 'other'
    amount: number
    unit: 'g' | 'oz' | 'kg' | 'lbs' | 'unit'
  }
}

const Food = ({ food }: Props) => {
  return (
    <div>
      <div className="flex flex-col justfiy-center w-full text-center">
        <h2 className="text-4xl font-bold">{food.name}</h2>
        <span>
          {food.amount}
          {food.unit}
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center flex-col justify-center w-full">
          Protein
          <p>{food.protein}</p>
        </div>
        <div className="flex items-center flex-col justify-center w-full">
          Fats
          <p>{food.fat}</p>
        </div>
        <div className="flex items-center flex-col justify-center w-full">
          Carbohydrates
          <p>{food.carbohydrate}</p>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="flex border-gray-500 border-2 text-gray-500 p-2 rounded-xl items-center justify-center">
          Add to diary
        </button>
        <button className="flex bg-blue-500 text-white p-2 rounded-xl items-center justify-evenly">
          <StarIcon className="h-6 w-6" />
          Save
        </button>
      </div>
    </div>
  )
}

export default Food
