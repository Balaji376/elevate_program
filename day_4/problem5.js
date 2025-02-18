Input:
[
  { "name": "Banana", "category": "Fruit", "subCategory": "Tropical" },
  { "name": "Apple", "category": "Fruit", "subCategory": "Temperate" },
  { "name": "Mango", "category": "Fruit", "subCategory": "Tropical" }
]

// Output:
// {
//   "Fruit": {
//     "Tropical": [
//       { "name": "Banana", "category": "Fruit", "subCategory": "Tropical" },
//       { "name": "Mango", "category": "Fruit", "subCategory": "Tropical" }
//     ],
//     "Temperate": [
//       { "name": "Apple", "category": "Fruit", "subCategory": "Temperate" }
//     ]
//   }
// }
