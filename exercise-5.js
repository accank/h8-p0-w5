function attack (damage) {
  // Code disini
  //var damageReduction = 2;
  var attackFunction = damage - 2;
  
  return attackFunction;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  
   //Cara rekursif
  /*var attacksRemaining = numberOfAttacks;
  
  if (numberOfAttacks === 0) {
    return 1;
  } else if (attacksRemaining < numberOfAttacks) {
    attacksRemaining -= 1;
  }
  
  return attacksRemaining * attack(damagePerAttack);*/
  
  
  // Cara biasa
  var attackFunction = attack(damagePerAttack);
  var numberofDamage = attackFunction * numberOfAttacks;
  
  return numberofDamage;
}


/*
// // Exercise 4 Week 5 Case 'Damage Calculation'
// by Muhamad Haddawi Hermawan Hacktiv8 Student Phase 0 Batch QFox

function attack (damage) {
    return damage - 2;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    return attack(damagePerAttack) * numberOfAttacks;
}

*/

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90