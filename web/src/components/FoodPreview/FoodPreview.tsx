import { StarIcon } from '@heroicons/react/24/outline'

type FoodNutrient = {
  nutrientName: string
  unitName: string
  value: number
}

interface Props {
  food: {
    description: string
    fdcId: string
    brandName?: string
    ingredients?: string
    foodNutrients: FoodNutrient[]
  }
}

const FoodPreview = ({ food }: Props) => {
  return (
    <div className="flex w-full p-6">
      <div className="flex w-full flex-col  justify-start text-center">
        <h2 className="text-2xl font-bold">{food.description}</h2>
        {food.brandName && (
          <p className="text-lg font-light text-gray-500">{food.brandName}</p>
        )}
      </div>
      <div className="flex w-3/12 items-center justify-center">
        {food.foodNutrients[0].value} {food.foodNutrients[0].unitName}
      </div>
    </div>
  )
}

export default FoodPreview
