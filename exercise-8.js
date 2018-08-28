function cariPelaku(str) {
  return str.match(/abc+/g).length;
}

/*
function cariPelaku(str) {
  // you can only write your code here!
  return str.match(/abc/g).length;
}
*/

/*
function cariPelaku(str) {
    // you can only write your code here!
    return str.match(/abc/gi).length
  }
*/

/*
function cariPelaku(str) {
  // you can only write your code here!
  var strAbc = (str.match(/abc/g));
  var jumlahAbc = strAbc.length;
  return jumlahAbc;
}
*/

/*
function cariPelaku(str) {
  // you can only write your code here!
  var hasil = str.match(/abc/g);
  //console.log(hasil);
  
  return hasil.length;
}
*/

/*
function cariPelaku(str) {
  var hasil = str.match(/abc/g);
  return hasil.length;
}
*/

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2