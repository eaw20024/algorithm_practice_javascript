for (var i = 0; i >= -300; i--) {
  if (i % 3 == 0) {
    if (i == -3 || i == -6) {
      continue;
    }
    console.log("Number: " + i);
  }
}
