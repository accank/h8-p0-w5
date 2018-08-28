function deepSum (arr) {
  // Code disini

if (arr === [] ){
  return "No Number"
}

var jumlah = 0
for (var i = 0; i < arr.length; i++){
 
  for (var j = 0; j < arr[i].length; j++){
    for (var k=0; k<arr[i][j].length; k++){
      jumlah += arr[i][j][k]
    }
  }  
}
  return jumlah
  
  } 
  
  /*
  //cara 2
  function deepSum(arr){
 if(!arr[0]){return 'No number'}
  var hasil  = 0
  for(var i = 0 ; i < arr.length ; i++){
    for(var j = 0 ; j < arr[i].length ; j++){
      for(var k = 0 ; k < arr[i][j].length ; k++){
        hasil = hasil + arr[i][j][k]
      }
    }
  }
  return hasil
}
  */

  /*
  //cara 3
  function deepSum (arr) {
    // Inisialisasi variabel i sebagai counter looping
    var i=0;
    // inisialisasi variabel countArr sebagai penampung kalkulasi
    var countArr = 0;
    
    // kondisi apabila arr tidak memiliki nilai/ array kosong
    if (arr.length !== 0) {
        // iterasi tingkat i
        for (i; i<arr.length; i++) {
            var j=0;
            var lengthJ = arr[i].length;
            
            // iterasi tingkat j
            for (j; j<lengthJ; j++) {
                var k = 0;
                var lengthK = arr[i][j].length;
                
                // iterasi tingkat k
                for (k; k<lengthK; k++) {
                    countArr += arr[i][j][k];
                }
            }
        }
        
        // mengembalikan nilai countArr
        return countArr;
        
    } else { // kondisi apabila arr = array kosong
        return 'No number!';
    }
}

  */
  
//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156



console.log(deepSum([])); // No number