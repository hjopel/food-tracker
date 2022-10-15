// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  foods: [
    {
      id: 1,
      name: 'Chicken breast',
      amount: 100,
      unit: 'g',
      type: 'meat',
      protein: 20,
      carbohydrate: 0.4,
      fat: 2,
    },
    {
      id: 2,
      name: 'Jasmin rice',
      amount: 100,
      unit: 'g',
      type: 'other',
      protein: 7.5,
      carbohydrate: 76,
      fat: 1,
    },
    {
      id: 3,
      name: 'Banana',
      amount: 100,
      unit: 'g',
      type: 'fruit',
      protein: 1,
      carbohydrate: 28,
      fat: 0,
    },
  ],
})
