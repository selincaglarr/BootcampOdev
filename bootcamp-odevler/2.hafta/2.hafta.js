/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John ciktisi verecek sekilde duzenleyiniz."
 */

const person =  {
    name: "John",
    message: function () {    
      console.log("Hello, " + this.name)
    }
  }
  
  const messageFunc = person.message
  messageFunc.call(person);


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
        numbers: [[10,20,30], 2],
        multiply: function(){
            console.log(this.numbers[0].map(number => {
             const result = number * this.numbers[1]
                return result;
            })) 
        }
    }; 
numbers.multiply();

// //Odev 2

var numbers = {
    numbers: [[10,20,30], 2],
    multiply: function(){
      this.numbers[0].map(function(number, numberIndex){
          const result = number * this.numbers[1];
          console.log(result)
      }.bind(this))
    }
  };
  
  numbers.multiply();

  

  
  
  /* 
    Odev 3:
    Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
    Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
    Ornek : isValidName("John") true donmeli
    Ornek : isValidName(" J ohn") false donmeli
  */
 

function isValidName(name){
    if( Number(name) == name ){
        return false;
    }
    
    else if( name===String(name)){
        let newarray = name.split('')
            if( newarray.length <= 2 || newarray.find( x => x == Number(x) ) ){
                return false;
                    
            }
       return !newarray.find( x => x == ' ');
      
    }
    else{
     return  false ;
    }
    
}



console.log(isValidName("  Fra nk") === false);
console.log(isValidName("  Frank") === true);
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(isValidName("Frank55") === false);


  /*
    Odev 4:
    Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
    dersSayisi: ogrencinin katildigi ders sayisi
    dersSaati: her bir dersin dakika cinsinden suresi
    katilimSaati fonkisyonu kac derse gerilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
    - iki arguman de number veya string olarak verilebilir.
    - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
    Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
    Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
    Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
  */
  
function katilimSaati(dersSayisi,dersSaati){
  
    if(dersSaati != Infinity && dersSayisi !=Infinity){
          if( !!Number( dersSayisi ) == true  &&  !!Number(dersSaati)==true && dersSaati != true && dersSayisi!=true  ){
            let toplamders= Math.round(Number( dersSaati)) * Math.round(Number( dersSayisi ) )
                 return toplamders;
            }
          else{
            return 'Girilen Degerler Uygun Degil'
          }
    }
    else{
      return 'Girilen Degerler Uygun Degil'
    }
}


console.log(!!katilimSaati(6, 10) == true);
console.log(!!katilimSaati(6, "10") == true);
console.log(!!katilimSaati("6", 10) == true);
console.log(!!katilimSaati("6", "10") == true);
console.log(katilimSaati("", 6) === false);
console.log(katilimSaati(6, "") === false);
console.log(katilimSaati("", "") === false);
console.log(katilimSaati("foo", 6) === false);
console.log(katilimSaati(6, "foo") === false);
console.log(katilimSaati("foo", "bar") === false);
console.log(katilimSaati(null, null) === false);
console.log(katilimSaati(null, undefined) === false);
console.log(katilimSaati(undefined, null) === false);
console.log(katilimSaati(undefined, undefined) === false);
console.log(katilimSaati(Infinity, Infinity) === false);
console.log(katilimSaati(undefined, Infinity) === false);
console.log(katilimSaati(Infinity, undefined) === false);
console.log(katilimSaati(false, false) === false);
console.log(katilimSaati(false, true) === false);
console.log(katilimSaati(true, false) === false);
console.log(katilimSaati(true, true) === false);


    
 
  
 
  