// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Search> = (args) => {
//   return <Search {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Search from './Search'

export const preview = () => {
  return <Search preview />
}
export const search = () => {
  const results = {
    query: 'banana',
    foods: [
      {
        fdcId: 2012128,
        description: 'BANANA',
        ingredients:
          'PEANUTS (AS DEFATTED PEANUT FLOUR, PEANUT BUTTER AND NATURAL PEANUT OILS), PURE WATER, TAPIOCA SYRUP, RICE SYRUP, VEGETABLE GLYCERINE, CANE SUGAR, BANANA, NATURAL COLORS AND FLAVORS, SALT, CALCIUM CARBONATE, LECITHIN, TOCOPHEROL (VITAMIN E), SODIUM ASCORBATE (VITAMIN C).',
        brandName: "BETTER'N PEANUT BUTTER",
        foodNutrients: [
          {
            unitName: 'G',
            value: 12.5,
            nutrientName: 'Protein',
          },
          {
            unitName: 'G',
            value: 6.25,
            nutrientName: 'Total lipid (fat)',
          },
          {
            unitName: 'G',
            value: 40.6,
            nutrientName: 'Carbohydrate, by difference',
          },
          {
            unitName: 'KCAL',
            value: 312,
            nutrientName: 'Energy',
          },
          {
            unitName: 'G',
            value: 6.25,
            nutrientName: 'Sugars, total including NLEA',
          },
          {
            unitName: 'G',
            value: 6.2,
            nutrientName: 'Fiber, total dietary',
          },
          {
            unitName: 'MG',
            value: 125,
            nutrientName: 'Calcium, Ca',
          },
          {
            unitName: 'MG',
            value: 1.12,
            nutrientName: 'Iron, Fe',
          },
          {
            unitName: 'MG',
            value: 594,
            nutrientName: 'Sodium, Na',
          },
          {
            unitName: 'IU',
            value: 0,
            nutrientName: 'Vitamin A, IU',
          },
          {
            unitName: 'MG',
            value: 15,
            nutrientName: 'Vitamin C, total ascorbic acid',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Cholesterol',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Fatty acids, total trans',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Fatty acids, total saturated',
          },
          {
            unitName: 'G',
            value: 3.12,
            nutrientName: 'Fatty acids, total monounsaturated',
          },
          {
            unitName: 'G',
            value: 3.12,
            nutrientName: 'Fatty acids, total polyunsaturated',
          },
        ],
      },
      {
        fdcId: 2011468,
        description: 'BANANA',
        ingredients: 'BANANA, SULFUR DIOXIDE (AS A PRESERVATIVE). ',
        brandName: 'NUTTY & FRUITY',
        foodNutrients: [
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Protein',
          },
          {
            unitName: 'G',
            value: 1.07,
            nutrientName: 'Total lipid (fat)',
          },
          {
            unitName: 'G',
            value: 78.6,
            nutrientName: 'Carbohydrate, by difference',
          },
          {
            unitName: 'KCAL',
            value: 336,
            nutrientName: 'Energy',
          },
          {
            unitName: 'G',
            value: 57.1,
            nutrientName: 'Sugars, total including NLEA',
          },
          {
            unitName: 'G',
            value: 1.8,
            nutrientName: 'Fiber, total dietary',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Calcium, Ca',
          },
          {
            unitName: 'MG',
            value: 1.93,
            nutrientName: 'Iron, Fe',
          },
          {
            unitName: 'MG',
            value: 7,
            nutrientName: 'Sodium, Na',
          },
          {
            unitName: 'IU',
            value: 0,
            nutrientName: 'Vitamin A, IU',
          },
          {
            unitName: 'MG',
            value: 2.1,
            nutrientName: 'Vitamin C, total ascorbic acid',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Cholesterol',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Fatty acids, total trans',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Fatty acids, total saturated',
          },
        ],
      },
      {
        fdcId: 173945,
        description: 'Bananas, dehydrated, or banana powder',
        ingredients: null,
        brandName: null,
        foodNutrients: [
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Folic acid',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'SFA 4:0',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'SFA 6:0',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 20:4',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 18:4',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'MUFA 20:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'MUFA 22:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 20:5 n-3 (EPA)',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:5 n-3 (DPA)',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:6 n-3 (DHA)',
          },
          {
            unitName: 'IU',
            value: 0,
            nutrientName: 'Vitamin D (D2 + D3), International Units',
          },
          {
            unitName: 'kJ',
            value: 1450,
            nutrientName: 'Energy',
          },
          {
            unitName: 'UG',
            value: 12,
            nutrientName: 'Vitamin A, RAE',
          },
          {
            unitName: 'UG',
            value: 14,
            nutrientName: 'Folate, food',
          },
          {
            unitName: 'UG',
            value: 14,
            nutrientName: 'Folate, DFE',
          },
          {
            unitName: 'MG',
            value: 19.6,
            nutrientName: 'Choline, total',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Alcohol, ethyl',
          },
          {
            unitName: 'UG',
            value: 14,
            nutrientName: 'Folate, total',
          },
          {
            unitName: 'MG',
            value: 0.44,
            nutrientName: 'Vitamin B-6',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Retinol',
          },
          {
            unitName: 'G',
            value: 3.89,
            nutrientName: 'Protein',
          },
          {
            unitName: 'G',
            value: 3.02,
            nutrientName: 'Ash',
          },
          {
            unitName: 'G',
            value: 0.171,
            nutrientName: 'Threonine',
          },
          {
            unitName: 'G',
            value: 0.074,
            nutrientName: 'Methionine',
          },
          {
            unitName: 'G',
            value: 0.201,
            nutrientName: 'Phenylalanine',
          },
          {
            unitName: 'G',
            value: 0.121,
            nutrientName: 'Tyrosine',
          },
          {
            unitName: 'G',
            value: 0.222,
            nutrientName: 'Alanine',
          },
          {
            unitName: 'G',
            value: 0.399,
            nutrientName: 'Glutamic acid',
          },
          {
            unitName: 'G',
            value: 0.19,
            nutrientName: 'Glycine',
          },
          {
            unitName: 'G',
            value: 0.229,
            nutrientName: 'Proline',
          },
          {
            unitName: 'MG',
            value: 1.15,
            nutrientName: 'Iron, Fe',
          },
          {
            unitName: 'MG',
            value: 108,
            nutrientName: 'Magnesium, Mg',
          },
          {
            unitName: 'MG',
            value: 74,
            nutrientName: 'Phosphorus, P',
          },
          {
            unitName: 'MG',
            value: 3,
            nutrientName: 'Sodium, Na',
          },
          {
            unitName: 'MG',
            value: 0.391,
            nutrientName: 'Copper, Cu',
          },
          {
            unitName: 'MG',
            value: 0.574,
            nutrientName: 'Manganese, Mn',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin B-12',
          },
          {
            unitName: 'MG',
            value: 7,
            nutrientName: 'Vitamin C, total ascorbic acid',
          },
          {
            unitName: 'MG',
            value: 0.18,
            nutrientName: 'Thiamin',
          },
          {
            unitName: 'MG',
            value: 0.24,
            nutrientName: 'Riboflavin',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Cholesterol',
          },
          {
            unitName: 'G',
            value: 0.698,
            nutrientName: 'Fatty acids, total saturated',
          },
          {
            unitName: 'G',
            value: 0.001,
            nutrientName: 'SFA 8:0',
          },
          {
            unitName: 'G',
            value: 0.006,
            nutrientName: 'SFA 12:0',
          },
          {
            unitName: 'G',
            value: 0.013,
            nutrientName: 'SFA 14:0',
          },
          {
            unitName: 'G',
            value: 0.045,
            nutrientName: 'MUFA 16:1',
          },
          {
            unitName: 'MG',
            value: 2.8,
            nutrientName: 'Niacin',
          },
          {
            unitName: 'G',
            value: 0.153,
            nutrientName: 'Fatty acids, total monounsaturated',
          },
          {
            unitName: 'G',
            value: 0.337,
            nutrientName: 'Fatty acids, total polyunsaturated',
          },
          {
            unitName: 'G',
            value: 0.005,
            nutrientName: 'SFA 10:0',
          },
          {
            unitName: 'G',
            value: 0.473,
            nutrientName: 'SFA 16:0',
          },
          {
            unitName: 'G',
            value: 0.023,
            nutrientName: 'SFA 18:0',
          },
          {
            unitName: 'G',
            value: 0.102,
            nutrientName: 'MUFA 18:1',
          },
          {
            unitName: 'G',
            value: 0.211,
            nutrientName: 'PUFA 18:2',
          },
          {
            unitName: 'G',
            value: 0.126,
            nutrientName: 'PUFA 18:3',
          },
          {
            unitName: 'G',
            value: 1.81,
            nutrientName: 'Total lipid (fat)',
          },
          {
            unitName: 'G',
            value: 88.3,
            nutrientName: 'Carbohydrate, by difference',
          },
          {
            unitName: 'KCAL',
            value: 346,
            nutrientName: 'Energy',
          },
          {
            unitName: 'G',
            value: 3,
            nutrientName: 'Water',
          },
          {
            unitName: 'MG',
            value: 22,
            nutrientName: 'Calcium, Ca',
          },
          {
            unitName: 'MG',
            value: 1490,
            nutrientName: 'Potassium, K',
          },
          {
            unitName: 'MG',
            value: 0.61,
            nutrientName: 'Zinc, Zn',
          },
          {
            unitName: 'G',
            value: 0.167,
            nutrientName: 'Isoleucine',
          },
          {
            unitName: 'G',
            value: 0.359,
            nutrientName: 'Leucine',
          },
          {
            unitName: 'G',
            value: 0.162,
            nutrientName: 'Lysine',
          },
          {
            unitName: 'G',
            value: 0.063,
            nutrientName: 'Cystine',
          },
          {
            unitName: 'G',
            value: 0.282,
            nutrientName: 'Valine',
          },
          {
            unitName: 'G',
            value: 0.176,
            nutrientName: 'Arginine',
          },
          {
            unitName: 'G',
            value: 0.333,
            nutrientName: 'Histidine',
          },
          {
            unitName: 'G',
            value: 0.503,
            nutrientName: 'Aspartic acid',
          },
          {
            unitName: 'G',
            value: 0.226,
            nutrientName: 'Serine',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Vitamin E, added',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin B-12, added',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin D (D2 + D3)',
          },
          {
            unitName: 'UG',
            value: 3.9,
            nutrientName: 'Selenium, Se',
          },
          {
            unitName: 'MG',
            value: 0.39,
            nutrientName: 'Vitamin E (alpha-tocopherol)',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Caffeine',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Theobromine',
          },
          {
            unitName: 'G',
            value: 47.3,
            nutrientName: 'Sugars, total including NLEA',
          },
          {
            unitName: 'UG',
            value: 84,
            nutrientName: 'Lutein + zeaxanthin',
          },
          {
            unitName: 'G',
            value: 9.9,
            nutrientName: 'Fiber, total dietary',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Cryptoxanthin, beta',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Lycopene',
          },
          {
            unitName: 'UG',
            value: 101,
            nutrientName: 'Carotene, beta',
          },
          {
            unitName: 'UG',
            value: 96,
            nutrientName: 'Carotene, alpha',
          },
          {
            unitName: 'IU',
            value: 248,
            nutrientName: 'Vitamin A, IU',
          },
          {
            unitName: 'UG',
            value: 2,
            nutrientName: 'Vitamin K (phylloquinone)',
          },
        ],
      },
      {
        fdcId: 1102654,
        description: 'Banana, fried',
        ingredients: null,
        brandName: null,
        foodNutrients: [
          {
            unitName: 'G',
            value: 1.19,
            nutrientName: 'Protein',
          },
          {
            unitName: 'G',
            value: 3.21,
            nutrientName: 'Total lipid (fat)',
          },
          {
            unitName: 'G',
            value: 32.3,
            nutrientName: 'Carbohydrate, by difference',
          },
          {
            unitName: 'KCAL',
            value: 151,
            nutrientName: 'Energy',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Alcohol, ethyl',
          },
          {
            unitName: 'G',
            value: 62.4,
            nutrientName: 'Water',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Caffeine',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Theobromine',
          },
          {
            unitName: 'G',
            value: 20.9,
            nutrientName: 'Sugars, total including NLEA',
          },
          {
            unitName: 'G',
            value: 2.8,
            nutrientName: 'Fiber, total dietary',
          },
          {
            unitName: 'MG',
            value: 13,
            nutrientName: 'Calcium, Ca',
          },
          {
            unitName: 'MG',
            value: 0.33,
            nutrientName: 'Iron, Fe',
          },
          {
            unitName: 'MG',
            value: 29,
            nutrientName: 'Magnesium, Mg',
          },
          {
            unitName: 'MG',
            value: 24,
            nutrientName: 'Phosphorus, P',
          },
          {
            unitName: 'MG',
            value: 353,
            nutrientName: 'Potassium, K',
          },
          {
            unitName: 'MG',
            value: 4,
            nutrientName: 'Sodium, Na',
          },
          {
            unitName: 'MG',
            value: 0.16,
            nutrientName: 'Zinc, Zn',
          },
          {
            unitName: 'MG',
            value: 0.079,
            nutrientName: 'Copper, Cu',
          },
          {
            unitName: 'UG',
            value: 1.2,
            nutrientName: 'Selenium, Se',
          },
          {
            unitName: 'UG',
            value: 24,
            nutrientName: 'Retinol',
          },
          {
            unitName: 'UG',
            value: 27,
            nutrientName: 'Vitamin A, RAE',
          },
          {
            unitName: 'UG',
            value: 29,
            nutrientName: 'Carotene, beta',
          },
          {
            unitName: 'UG',
            value: 22,
            nutrientName: 'Carotene, alpha',
          },
          {
            unitName: 'MG',
            value: 0.19,
            nutrientName: 'Vitamin E (alpha-tocopherol)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin D (D2 + D3)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Cryptoxanthin, beta',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Lycopene',
          },
          {
            unitName: 'UG',
            value: 20,
            nutrientName: 'Lutein + zeaxanthin',
          },
          {
            unitName: 'MG',
            value: 7.4,
            nutrientName: 'Vitamin C, total ascorbic acid',
          },
          {
            unitName: 'MG',
            value: 0.026,
            nutrientName: 'Thiamin',
          },
          {
            unitName: 'MG',
            value: 0.075,
            nutrientName: 'Riboflavin',
          },
          {
            unitName: 'MG',
            value: 0.644,
            nutrientName: 'Niacin',
          },
          {
            unitName: 'MG',
            value: 0.373,
            nutrientName: 'Vitamin B-6',
          },
          {
            unitName: 'UG',
            value: 13,
            nutrientName: 'Folate, total',
          },
          {
            unitName: 'UG',
            value: 0.01,
            nutrientName: 'Vitamin B-12',
          },
          {
            unitName: 'MG',
            value: 11.2,
            nutrientName: 'Choline, total',
          },
          {
            unitName: 'UG',
            value: 0.8,
            nutrientName: 'Vitamin K (phylloquinone)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Folic acid',
          },
          {
            unitName: 'UG',
            value: 13,
            nutrientName: 'Folate, food',
          },
          {
            unitName: 'UG',
            value: 13,
            nutrientName: 'Folate, DFE',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Vitamin E, added',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin B-12, added',
          },
          {
            unitName: 'MG',
            value: 8,
            nutrientName: 'Cholesterol',
          },
          {
            unitName: 'G',
            value: 1.9,
            nutrientName: 'Fatty acids, total saturated',
          },
          {
            unitName: 'G',
            value: 0.114,
            nutrientName: 'SFA 4:0',
          },
          {
            unitName: 'G',
            value: 0.071,
            nutrientName: 'SFA 6:0',
          },
          {
            unitName: 'G',
            value: 0.042,
            nutrientName: 'SFA 8:0',
          },
          {
            unitName: 'G',
            value: 0.09,
            nutrientName: 'SFA 10:0',
          },
          {
            unitName: 'G',
            value: 0.093,
            nutrientName: 'SFA 12:0',
          },
          {
            unitName: 'G',
            value: 0.265,
            nutrientName: 'SFA 14:0',
          },
          {
            unitName: 'G',
            value: 0.874,
            nutrientName: 'SFA 16:0',
          },
          {
            unitName: 'G',
            value: 0.358,
            nutrientName: 'SFA 18:0',
          },
          {
            unitName: 'G',
            value: 0.743,
            nutrientName: 'MUFA 18:1',
          },
          {
            unitName: 'G',
            value: 0.113,
            nutrientName: 'PUFA 18:2',
          },
          {
            unitName: 'G',
            value: 0.07,
            nutrientName: 'PUFA 18:3',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 20:4',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:6 n-3 (DHA)',
          },
          {
            unitName: 'G',
            value: 0.075,
            nutrientName: 'MUFA 16:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 18:4',
          },
          {
            unitName: 'G',
            value: 0.004,
            nutrientName: 'MUFA 20:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 2:5 n-3 (EPA)',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'MUFA 22:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:5 n-3 (DPA)',
          },
          {
            unitName: 'G',
            value: 0.861,
            nutrientName: 'Fatty acids, total monounsaturated',
          },
          {
            unitName: 'G',
            value: 0.184,
            nutrientName: 'Fatty acids, total polyunsaturated',
          },
        ],
      },
      {
        fdcId: 1102653,
        description: 'Banana, raw',
        ingredients: null,
        brandName: null,
        foodNutrients: [
          {
            unitName: 'G',
            value: 1.09,
            nutrientName: 'Protein',
          },
          {
            unitName: 'G',
            value: 0.33,
            nutrientName: 'Total lipid (fat)',
          },
          {
            unitName: 'G',
            value: 22.8,
            nutrientName: 'Carbohydrate, by difference',
          },
          {
            unitName: 'KCAL',
            value: 89,
            nutrientName: 'Energy',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'Alcohol, ethyl',
          },
          {
            unitName: 'G',
            value: 74.9,
            nutrientName: 'Water',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Caffeine',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Theobromine',
          },
          {
            unitName: 'G',
            value: 12.2,
            nutrientName: 'Sugars, total including NLEA',
          },
          {
            unitName: 'G',
            value: 2.6,
            nutrientName: 'Fiber, total dietary',
          },
          {
            unitName: 'MG',
            value: 5,
            nutrientName: 'Calcium, Ca',
          },
          {
            unitName: 'MG',
            value: 0.26,
            nutrientName: 'Iron, Fe',
          },
          {
            unitName: 'MG',
            value: 27,
            nutrientName: 'Magnesium, Mg',
          },
          {
            unitName: 'MG',
            value: 22,
            nutrientName: 'Phosphorus, P',
          },
          {
            unitName: 'MG',
            value: 358,
            nutrientName: 'Potassium, K',
          },
          {
            unitName: 'MG',
            value: 1,
            nutrientName: 'Sodium, Na',
          },
          {
            unitName: 'MG',
            value: 0.15,
            nutrientName: 'Zinc, Zn',
          },
          {
            unitName: 'MG',
            value: 0.078,
            nutrientName: 'Copper, Cu',
          },
          {
            unitName: 'UG',
            value: 1,
            nutrientName: 'Selenium, Se',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Retinol',
          },
          {
            unitName: 'UG',
            value: 3,
            nutrientName: 'Vitamin A, RAE',
          },
          {
            unitName: 'UG',
            value: 26,
            nutrientName: 'Carotene, beta',
          },
          {
            unitName: 'UG',
            value: 25,
            nutrientName: 'Carotene, alpha',
          },
          {
            unitName: 'MG',
            value: 0.1,
            nutrientName: 'Vitamin E (alpha-tocopherol)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin D (D2 + D3)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Cryptoxanthin, beta',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Lycopene',
          },
          {
            unitName: 'UG',
            value: 22,
            nutrientName: 'Lutein + zeaxanthin',
          },
          {
            unitName: 'MG',
            value: 8.7,
            nutrientName: 'Vitamin C, total ascorbic acid',
          },
          {
            unitName: 'MG',
            value: 0.031,
            nutrientName: 'Thiamin',
          },
          {
            unitName: 'MG',
            value: 0.073,
            nutrientName: 'Riboflavin',
          },
          {
            unitName: 'MG',
            value: 0.665,
            nutrientName: 'Niacin',
          },
          {
            unitName: 'MG',
            value: 0.367,
            nutrientName: 'Vitamin B-6',
          },
          {
            unitName: 'UG',
            value: 20,
            nutrientName: 'Folate, total',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin B-12',
          },
          {
            unitName: 'MG',
            value: 9.8,
            nutrientName: 'Choline, total',
          },
          {
            unitName: 'UG',
            value: 0.5,
            nutrientName: 'Vitamin K (phylloquinone)',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Folic acid',
          },
          {
            unitName: 'UG',
            value: 20,
            nutrientName: 'Folate, food',
          },
          {
            unitName: 'UG',
            value: 20,
            nutrientName: 'Folate, DFE',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Vitamin E, added',
          },
          {
            unitName: 'UG',
            value: 0,
            nutrientName: 'Vitamin B-12, added',
          },
          {
            unitName: 'MG',
            value: 0,
            nutrientName: 'Cholesterol',
          },
          {
            unitName: 'G',
            value: 0.112,
            nutrientName: 'Fatty acids, total saturated',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'SFA 4:0',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'SFA 6:0',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'SFA 8:0',
          },
          {
            unitName: 'G',
            value: 0.001,
            nutrientName: 'SFA 10:0',
          },
          {
            unitName: 'G',
            value: 0.002,
            nutrientName: 'SFA 12:0',
          },
          {
            unitName: 'G',
            value: 0.002,
            nutrientName: 'SFA 14:0',
          },
          {
            unitName: 'G',
            value: 0.102,
            nutrientName: 'SFA 16:0',
          },
          {
            unitName: 'G',
            value: 0.005,
            nutrientName: 'SFA 18:0',
          },
          {
            unitName: 'G',
            value: 0.022,
            nutrientName: 'MUFA 18:1',
          },
          {
            unitName: 'G',
            value: 0.046,
            nutrientName: 'PUFA 18:2',
          },
          {
            unitName: 'G',
            value: 0.027,
            nutrientName: 'PUFA 18:3',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 20:4',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:6 n-3 (DHA)',
          },
          {
            unitName: 'G',
            value: 0.01,
            nutrientName: 'MUFA 16:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 18:4',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'MUFA 20:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 2:5 n-3 (EPA)',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'MUFA 22:1',
          },
          {
            unitName: 'G',
            value: 0,
            nutrientName: 'PUFA 22:5 n-3 (DPA)',
          },
          {
            unitName: 'G',
            value: 0.032,
            nutrientName: 'Fatty acids, total monounsaturated',
          },
          {
            unitName: 'G',
            value: 0.073,
            nutrientName: 'Fatty acids, total polyunsaturated',
          },
        ],
      },
    ],
  }
  return <Search query="banana" results={results} />
}

export default {
  title: 'Components/Search',
  component: Search,
} as ComponentMeta<typeof Search>
