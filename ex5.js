let cities = ['New York', 'Tokyo', 'Paris', 'London', 'Berlin'];
 console.log(cities[0]); // 'New York'
 console.log(cities[1]); // 'Tokyo'
 console.log(cities[2]); // 'Paris' 
  console.log(cities[3]); // 'London'
  console.log(cities[4]); // 'Berlin'
  let temp = cities[1];
  cities[1]= cities [4];
cities[4]= temp
   console.log(cities[0]); // 'New York'
 console.log(cities[1]); // 'Tokyo'
 console.log(cities[2]); // 'Paris' 
  console.log(cities[3]); // 'London'
  console.log(cities[4]); // 'Berlin'
// cities[4]= cities [1]
cities.unshift('Sydney');
console.log(cities); // ['Sydney', 'New York', 'Tokyo', 'Paris', 'London', 'Berlin']
let lastCity = cities.pop();
console.log(lastCity); // Tokyo
console.log(cities); // ['Sydney', 'New York', 'Tokyo', 'Paris', 'London']