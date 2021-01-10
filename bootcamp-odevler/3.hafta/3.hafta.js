class Animal{
    constructor(name){
          this.name =name;
          
      }
    action(){
        e.stopPropotogation();
          document.getElementById(this.actionSoundName).play();
  
      }
  
    getImage(){
          let myImage =document.querySelector('img');
          myImage.src=this.animalImage;
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
      petsTable.querySelector("tbody").appendChild(petTR);
  
      petTR.addEventListener('click',this.getImage.bind(this));
        //petTR.onclick=this.putImage.bind(this)
  }
  }
  
  class Cat extends Animal{
      constructor(name,legs,actionText,animalImage,actionSoundName){
          super(name);
          this.legs=4;
          this.actionSoundName='meow';
          this.actionText='Meoow';
          this.animalImage='https://static.birgun.net/resim/haber-detay-resim/2018/11/23/en-konuskan-kedi-turu-hangisi-534086-5.jpg'
      }
  }
  
  
  
  class Monkey extends Animal{
      constructor(name,legs,actionText,animalImage,actionSoundName){
          super(name);
          this.legs=2;
          this.actionSoundName='scream';
          this.actionText='Scream';
          this.animalImage='https://static9.depositphotos.com/1594920/1088/i/950/depositphotos_10880072-stock-photo-mixed-breed-monkey-between-chimpanzee.jpg'
      }
  }
  
  
  var Mila = new Cat('Mila');
  Mila.putInTheDocument();
  
  var Charlie = new Monkey('Charlie');
  Charlie.putInTheDocument();