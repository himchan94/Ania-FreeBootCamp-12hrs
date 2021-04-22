// Fizz Buzz
// 3으로 나눠지는 숫자는 Fizz
// 5로 나눠지는 숫자는 Buzz

// 15로 나눠지면 Fizz Buzz

const a = 10

if (a % 15 === 0) {
  console.log("Fizz Buzz")
} else {
  if (a % 3 === 0) {
    console.log("Fizz")
  } else if (a % 5 === 0) {
    console.log("Buzz")
  }
}
