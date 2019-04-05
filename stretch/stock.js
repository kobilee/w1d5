 maxProfit = function(arr) {

  arrSort = arr.concat().sort();
  for (var i = 0; i < arrSort.length; i++){
    for (var j = arrSort.length  - 1; j > 0; j--){
      if (arr.indexOf(arrSort[i]) < arr.indexOf(arrSort[j])){
        var  max = arrSort[j] -  arrSort[i];
        return max;
      }
    }
  }
};

 console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]));