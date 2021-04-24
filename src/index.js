const drinksMenu = ["사이다", "콜라", "주스"]

const randomNumber = Math.random()

console.log(drinksMenu[Math.round(randomNumber) * 2])

console.log(drinksMenu.length)

console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])
