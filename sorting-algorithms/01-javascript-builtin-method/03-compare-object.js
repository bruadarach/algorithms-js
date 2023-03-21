const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

/* sort by value */
items.sort((a, b) => a.value - b.value);
console.log(items);
//   [
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'Zeros', value: 37 },
//     { name: 'And', value: 45 }
//   ]

/* sort by name */
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal // keep original order of a and b
  return 0;
});
console.log(items);
// [
//     { name: 'And', value: 45 },
//     { name: 'Edward', value: 21 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'The', value: -12 },
//     { name: 'Zeros', value: 37 }
//   ]
