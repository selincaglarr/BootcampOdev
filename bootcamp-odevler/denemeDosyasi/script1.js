const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const myProgress = document.getElementById("progress");
const myCircle = document.getElementsByClassName("circle");



nextButton.addEventListener("click", function () {

myCircle.forEach( (index,x) => {
    x.classList.add("active");
    if(index==3){
        
        previousButton.disabled = true;
        nextButton.disabled = true;
    }
});



previousButton.addEventListener("click", function(){
    
myCircle.forEach( (x,index) => { 
    x.classList.remove("active");
    if(index==3){   
           
        previousButton.disabled = true;
        nextButton.disabled = true;
    }
        
})});
