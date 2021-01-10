class Animal {
    constructor(name, image){
        this.name = name;
        this.image = image;
    }
  
    action(e){
      e.stopPropagation();
      document.getElementById(this.actionSoundName).play(); 
    }
  
    putImage(){
      const imageHolder = document.querySelector("#imageHolder");
      const image = imageHolder.querySelector("img");
      let newImage = "";
      if(image){
        image.setAttribute("src", this.image)
      }else{
        newImage = document.createElement("img");
        newImage.setAttribute("src", this.image);
        imageHolder.appendChild(newImage);
      }
    }
  
    putInTheDocument(){
      var petsTable = document.getElementById("petsTable");
      var petTR = document.createElement("tr");
    
      var petNameTD = document.createElement("td");
      petNameTD.textContent = this.name;
      petTR.appendChild(petNameTD);
    
      var petLegsTD = document.createElement("td");
      petLegsTD.textContent = this.legs;
      petTR.appendChild(petLegsTD);
    
      var petActionTD = document.createElement("td");
      var petActionTDButton = document.createElement("button");
      petActionTDButton.textContent = this.actionText;
      petActionTD.appendChild(petActionTDButton);
      petTR.appendChild(petActionTD);
      
      petActionTDButton.onclick = this.action.bind(this);
      petsTable.querySelector("tbody").appendChild(petTR)
  
      petTR.onclick = this.putImage.bind(this)
    }
  }
  
  class Cat extends Animal{
    constructor(name, imageUrl){
      super(name, imageUrl);
      this.legs = 4;
      this.actionText = "Meoow"
      this.actionSoundName = "meow"
    }
  }
  
  class Monkey extends Animal{
      constructor(name, imageUrl){
        super(name, imageUrl);
        this.legs = 2;
        this.actionText = "Scream";
        this.actionSoundName = "scream";
    }
  }
  
  
  var Mila = new Cat("Mila", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&usqp=CAU");
  Mila.putInTheDocument();
  
  var Charlie = new Monkey("Charlie", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGQCLF0DfFgZ9qcAx9igf2CzzjIPSAOnMrA&usqp=CAU");
  Charlie.putInTheDocument();