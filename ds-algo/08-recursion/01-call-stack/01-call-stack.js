function funcThree() {
  console.log("funcThree");
}

function funcTwo() {
  funcThree();
  console.log("funcTwo");
}

function funcOne() {
  funcTwo();
  console.log("funcOne");
}

funcOne();
// funcThree
// funcTwo
// funcOne
