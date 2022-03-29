// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    let arraySheep = [];
    if (num === 0){
      return ""
    }
    else{
      for (let i = 1; i <= num; i++){
        arraySheep[i-1] = `${i} sheep...`;
      }
      return arraySheep.join("");
    }
  }