let a = {
  1:{2: 'you'},
  4:{3:'me'}
};

// console.log(a[4])
for(var i in a){
  // (Object.keys(i) === '2')? console.log(Object.values(a[i])): '';
  //Object.keys(a[i]) === "2" && console.log(Object.values(a[i]))
  console.log (`${typeof(Object.keys(a[i]))},  ${Object.values(a[i])}`);

  // console.log(typeof(Object.keys(a[i]) )=== "object" && Object.keys(a[i]).values()
}
