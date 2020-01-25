// this is a self-invoking anonymous function
// also called an (function() {
// also called a module

(() => {
  // print("some message");
  console.log("some message - from JavaScript");

  // find the button element on the page by its id with JavaScript
  let theHeading = document.querySelector('h1'),
      //svgImage = document.querySelector("#svgGraphic"),
      allSVGs = document.querySelectorAll(".svg"),
      myspan = document.querySelector('main span'),
        myObject = document.querySelector('.svg-img');

  // this function changes the heading text
  function changeText() {
    theHeading.textContent = "hello there from the console";
  }
  function toggleselection(){
      this.classList.toggle("selected");
      console.log(this.id);
    }
  // log the id of the svg to the console when a user hovers on it
  function logSVG() {
    console.log(this.id);
  }

  //theButton.addEventListener("click", changeText);
  //svgImage.addEventListener("click", logSVG),
  //svgImage2.addEventListener("click", logSVG);
  // loop through the collection and apply our event handling to each element
  allSVGs.forEach(item => item.addEventListener('click', logSVG)),
  //document.querySelector('h1').textContent = "hello there from the console";
  myspan.addEventListener('click', toggleselection),
  myObject.addEventListener('hover', toggleselection);

  //for (let i; i<allSVGs.length; i++) {
  //for (el in allSVGs) {}
})();
