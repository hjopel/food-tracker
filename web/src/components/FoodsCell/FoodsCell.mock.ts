// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  getFoods: {
    foods: [
      {
        fdcId: 2038064,
        description: 'CHICKEN',
        brandName: 'KEYSTONE',
        ingredients: 'CHICKEN, SEA SALT.',
        foodNutrients: [
          {
            nutrientName: 'Energy',
            unitName: 'KCAL',
            value: 107,
          },
        ],
      },
      {
        fdcId: 2090362,
        description: 'CHICKEN',
        brandName: 'WEGMANS',
        ingredients:
          'HONEY BRINED CHICKEN (CONTAINS UP TO 12% OF A SOLUTION OF: WATER, SEASONING [SUGAR, SALT, HONEY POWDER {HONEY, EVAPORATED CANE SYRUP}, NATURAL FLAVOR], VINEGAR, SALT), LEMON PEPPER SEASONING (SALT, BLACK PEPPER, CITRIC ACID, ONION, SUGAR, GARLIC, CALCIUM STEARATE, SILICON DIOXIDE AND CALCIUM SILICATE [ADDED TO MAKE FREE FLOWING], CELERY SEED, LEMON OIL, YELLOW 5).',
        foodNutrients: [
          {
            nutrientName: 'Energy',
            unitName: 'KCAL',
            value: 188,
          },
        ],
      },
      {
        fdcId: 1099862,
        description: 'Chicken salad or chicken spread sandwich',
        brandName: null,
        ingredients: null,
        foodNutrients: [
          {
            nutrientName: 'Energy',
            unitName: 'KCAL',
            value: 232,
          },
        ],
      },
    ],
  },
})
