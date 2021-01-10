  
const data = {
    USD: {EUR: 0.82, GBP: 0.74 ,RON:3.98},
    EUR: {USD: 1.23, GBP: 0.91, RON:4.86},
    GBP: {USD: 1.35, EUR: 1.10, RON:5.35},
    RON: {EURO:0.21, GPB: 0.19, USD:0.25}
  };
  
  const currencyKeys = Object.keys(data);
  
  function createCurrencyElements(elements, root, inputName){
    for(let i =0; i< elements.length; i++){
      const currencyKeyDiv   = document.createElement("div");
      const currencyKeyInput = document.createElement("input");
 
      currencyKeyInput.setAttribute("type", "radio");
      currencyKeyInput.setAttribute("name", inputName);
      currencyKeyInput.setAttribute("id", inputName + elements[i]);
      currencyKeyInput.setAttribute("value", elements[i]);
  
      const currencyKeyLabel = document.createElement("label");
      currencyKeyLabel.setAttribute("for", inputName + elements[i]);
     
      currencyKeyLabel.textContent = elements[i];
  
      currencyKeyDiv.appendChild(currencyKeyInput);
      currencyKeyDiv.appendChild(currencyKeyLabel);
      root.appendChild(currencyKeyDiv);
    } 
  }
  
  //from
  const parentEl = document.querySelector("#currency-box-from");
  const fromInputName = "currency_from";
  createCurrencyElements(currencyKeys, parentEl, fromInputName);
  
  // to
  const parentToEl = document.querySelector("#currency-box-to");
  const toInputName = "currency_to";
  createCurrencyElements(currencyKeys, parentToEl, toInputName);

  
  
  const calculateButton = document.querySelector("#calculate-button");
    
    calculateButton.addEventListener("click", function(){
     // kimden ceviriyourz
     const fromTarget = document.querySelector("input[name='currency_from']:checked").value;
     // kime ceviriyoruz
     const toTarget   = document.querySelector("input[name='currency_to']:checked").value;
     // amountu alalim
     const amount     = document.querySelector("input[name='amount']").value;


    //  console.log(document.querySelector("input[name='currency_to']"))
     
     
  
    
    if( !amount.split('').every(x=> x == Number(x))){
        const noAmount =document.querySelector("#currency-result");
        noAmount.innerHTML ="Lutfen Sadece Sayi Degeri Giriniz";
          return;
    }
      
    

    const currentCurrencyObject = data[fromTarget];
    const resultForOne = currentCurrencyObject[toTarget];
    const result = amount * resultForOne;   
    
    
    if(!!result){
      const currencyResult = document.querySelector("#currency-result");
      currencyResult.innerHTML = amount + " " + fromTarget + " = " + result + " " + toTarget;
      return;
    }
    
    else{
      const noResult =document.querySelector("#currency-result");
      noResult.innerHTML ="Farkli Para Birimlerini Secmelisiniz"
      return;
      }
   
    });





