module.exports = function (num) {
  // write your code here
  let fibinosiSequence = [1, 1]
  for (let i = 1; i <= num; i++) {
      let nextnum = fibinosiSequence[i] + fibinosiSequence[i - 1];
      fibinosiSequence.push(nextnum);
  }
  return fibinosiSequence.filter(function(val,index,arr){
    return val<=num && val%2>0;
  }).reduce(function(sum,val){
    return sum + val;
  });
}
