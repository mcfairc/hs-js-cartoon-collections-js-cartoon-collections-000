function dwarfRollCall(dwarves) {
  var numbered = [];
  for (var i = 0; i < dwarves.length; i++) {
    numbered.push(`${i + 1}. ${dwarves[i]} `);
  }
  return numbered.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var loudCalls = [];

  for (var i = 0; i < planeteerCalls.length; i++) {
    loudCalls.push(planeteerCalls[i].toUpperCase + "!")
  }
   return loudCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
    return true;
  } else if (words[i].length <= 4) {
    return false;
  }
 }
}


function findTheCheese (array) {
  var cheeses = ["cheddar", "gouda", "camembert"];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < cheeses.length; j++) {
      if (array[i] === cheeses[j]) {
        return array[i];
    }
   }
  }
    return "no cheese!"
}
