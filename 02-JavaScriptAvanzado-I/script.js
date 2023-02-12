function printing() {
  console.log(1); //1
  setTimeout(function () {
     console.log(2); //4 
  }, 1000);
  setTimeout(function () {
     console.log(3); //3
  }, 0);
  console.log(4); //2
}

printing();