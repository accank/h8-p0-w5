function attack (damage) {
  var attackFunction = damage - 2;
  return attackFunction;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  
  var attackFunction = attack(damagePerAttack);
  var numberofDamage = attackFunction * numberOfAttacks;
  
  return numberofDamage;
}



// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90