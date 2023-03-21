const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months); // ["Dec", "Feb", "Jan", "March"]

months.sort((a, b) => a.length - b.length);
console.log(months); //[ 'Dec', 'Feb', 'Jan', 'March' ]

/* Sorting strings with non-ASCII characters
    - i.e. strings with accented characters (e, é, è, a, ä, etc.) 
    - strings from languages other than English, use `String.prototype.localeCompare()`
*/

const nonASCII = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
];
nonASCII.sort((a, b) => a.localeCompare(b));
// ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

/* Sorting on sparse arrays */
console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]
