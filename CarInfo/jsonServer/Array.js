let mainArray =[1,2,3,4,5];
console.log("mainArray", mainArray);


//  Add element at first    start
let addFirst =[];
 for (let i = 0; i < mainArray.length; i++) {
   
        addFirst[0]=0;
        addFirst[0+mainArray[i]]= mainArray[i] ;

    }

   let mainArray1 =[4];

   console.log("Added 0 at First", addFirst);
   //  Add element at first    end


//   Add element at middle    start
let middleArray = [];

for (let i = 0; i < addFirst.length + 1; i++) {
   if (i > 3) {
    middleArray[i]=addFirst[i - 1]
   } else {
    middleArray[i]=addFirst[i]
   }
}
console.log("added element at middle ", middleArray);
//   Add element at middle    end

//   Add element at last    start
let addLast = middleArray;
addLast[addLast.length] = 6;
console.log("Added 100 at Last", addLast);

//   Add element at last    end