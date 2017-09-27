//You are passed an array containing strings. Working within that same array, replace each string with a number
// the length of the string at previous array index – and return the array.

function prevLen(arr){
  if (!Array.isArray(arr)){
    console.log("This is not an array")
    return false;
  }

  for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = (arr[i - 1]).length;
  }
  console.log(arr);
}
prevLen(['string','bing','sing']);
prevLen("nothing","just","test");
prevLen(["I","am","not","here","Bobby"]);
