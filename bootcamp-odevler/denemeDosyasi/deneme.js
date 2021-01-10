const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const myProgress = document.getElementById("progress");
const myCircle = document.getElementsByClassName("circle");

var currentActive = 0;

nextButton.addEventListener("click", function () {
    if(currentActive <2){
        currentActive++
        console.log(currentActive)
        myCircle[currentActive].classList.add("active");
    }
   else if (currentActive < 3 ){
       currentActive++
       myCircle[currentActive].classList.add("active");
       nextButton.disabled = true;
       previousButton.disabled = false;
   }



})
previousButton.addEventListener("click", function () {
    console.log(currentActive)
    myCircle[currentActive].classList.remove("active");
    currentActive--



})