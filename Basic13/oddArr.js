var arr = [];
function oddArr(){
  for (var i = 1; i < 255; i++){
    if (i % 2 != 0){
      arr.push(i);
    }
  }
  console.log(arr)
  return arr;
}
oddArr();
