// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:

function valdiateCred(card_aux){

    let card=card_aux.slice();// Realocate in another memory place.

//console.log(card);

//------------ First step, X2 all elements except check digit-----------------------------------------

for (let i = card_aux.length-2; i >=0; i -= 2) {
     card[i]=card[i]*2;

     if (card[i]>9){
        card[i]=card[i]-9;
    };
};

//console.log(card);

//-------------sum al the numbers----------------------------------------------

let sum = card.reduce(function(accumulator, currentValue) {  

    return accumulator + currentValue;
  });
  delete card

//console.log(sum);

//---------- if modulo of the sum equals 0 credit card is valid-----------------------

let credit;
if (sum%10===0){

   credit=true;
}else{

   credit=false;
}

//console.log(credit);
return credit 

}

function findInvalidCards(arr){
    // function to return incorrect credit cards

    let gob=[];

    let value=[];
    for (let i = 0; i <arr.length ; i +=1) {
        
        gob[i]=valdiateCred(arr[i]); // Bolean array of true and false values
       // console.log(valdiateCred(arr[i]));

       if (valdiateCred(arr[i])===false){
            value.push(arr[i])  // Nested arrays of incorrect credit cards

       };
    };
    return[value, gob]
}

function onlyUnique(value, index, self) {
    // Function for removing duplicates

    return self.indexOf(value) === index;
  }

function idInvalidCardCompanies(arr){
 // function for wich companies mailed duplicates

    let comp=[];
    for (let i = 0; i <arr.length ; i +=1) {

      if ( arr[i][0]===3){
        comp[i]='Amex';

      }else if (arr[i][0]===4){
         comp[i]='Visa';

      }else if(arr[i][0]===5){
        comp[i]='Mastercard';

      }else if(arr[i][0]===6){
        comp[i]='Discover';
        
      }else {
        comp[i]='Company not found';
      }
    }
    return comp.filter(onlyUnique)
}


//---------Input credit cards in the functions-----------------------

let [invalid,gob]=findInvalidCards(batch); // Return Invalid card numbers
let comp  =idInvalidCardCompanies (invalid); // Return companies that represente invalid cards

 console.log( "Invalid credit cards");
 console.log( invalid);
 console.log( "Companies that mailed invalid credit cards");
 console.log(comp);

 //--------------Aditional exercise--------------------------------
//  Input any number and transform to array so that it can be used my the code above

let anycard=4532730744608283; //copy and paste here any card number 

//--------------Convert to array-------------------------------------

if (typeof(anycard)=='string'){

  anycard=Array.from(anycard,function (x){
   return parseInt(x);
  })

}else{
  anycard=Array.from(String(anycard),function (x){
    return parseInt(x);
   })

};

//------------------Input credit cards in the functions-----------------------

 [invalid,gob]=findInvalidCards([anycard]); // Return Invalid card numbers
comp=idInvalidCardCompanies (invalid); // Return companies that represente invalid cards

 console.log( "\n\nInput any credit card:" + anycard);

if (gob[0]==false){

  console.log( "\nInvalid credit card");
  console.log(invalid);
  console.log( "Companie that mailed invalid credit card");
  console.log(comp);
 
}else{
  console.log( "\nvalid credit card");
  console.log(anycard);
  console.log( "Companie that mailed valid credit card");
  console.log(idInvalidCardCompanies ([anycard]));

};

