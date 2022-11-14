    let cars = [
        {
          "color": "purple",
          "type": "minivan",
          "registration": new Date('2017-01-03'),
          "capacity": 7
        },
        {
          "color": "ankush",
          "type": "station wagon",
          "registration": new Date('2018-03-03'),
          "capacity": 3
        },
        {
          "color": "blue",
          "type": "Tata Altroz",
          "registration": new Date('2022-03-03'),
          "capacity": 4
          
        },
        {
          "color": "black",
          "type": "Maruti Celerio",
          "registration": new Date('2021-06-02'),
          "capacity": 5
        },
        {
          "color": "red",
          "type": "cabrio",
          "registration": new Date('2021-06-02'),
          "capacity": 4
        }

      ];   
      
      
      console.log("MainArray", cars);

    //Add a new object at the start and end

    let addObj1 = [];
    i = cars.length;
    while (i-- > 0)
        addObj1[i +1] = cars[i];
    addObj1[0] = {"color": "red",
                "type": "Maruti 800",
                "registration": new Date('2018-06-02'),
                "capacity": 4};
    console.log(addObj1);


   let addObj2 = addObj1;
      addObj2[addObj2.length] = { "color": "silver",
                                  "type": "innova crysta ",
                                  "registration": new Date('2022-03-04'),
                                  "capacity": 7};

   console.log(addObj2);



//   //Add a new object in the middle
   let newObj = {   "color": "white",
                      "type": "Mahindra Bolero ",
                      "registration": new Date('2012-07-07'),
                      "capacity": 7};
   
  let position = 3;

  for(let i =addObj2.length-1; i>=0; i--){

    if(i>=position){

      addObj2[i+1] = addObj2[i];

      if(i==position){

        addObj2[i]=newObj;
        break
      }
    }
  }
       console.log(addObj2);
  



   //Find an object in an array by its values (color is red)

        let obj = "";
        for(i = 0; i<addObj2.length; i++){

        if(addObj2[i].color ==='red'){

          obj = addObj2[i]

      }
    }
        console.log(obj);



 // Get multiple items from an array that match a condition (color is red)


      for(i = 0; i<addObj2.length; i++){

       if(addObj2[i].color==='red'){


        console.log(addObj2[i])
      
       }
    }

     //objects of an array (small car = 1-3 people, medium car = 4-5 people, large car = 6-9 people



     for(i = 0; i<addObj2.length; i++){
         if(addObj2[i].capacity<=3){
          console.log("small",addObj2[i])
         }
           if(addObj2[i].capacity<=5){

            console.log("medium",addObj2[i])
            
           }

           if(addObj2[i].capacity>6){

            console.log("large",addObj2[1])
           }

     }
        
        
    //Sort an array by a property capacity Note: Do not use any pre-defined function


        
        for(i = 0; i<addObj2.length; i++){

          for(j = i+1; j<addObj2.length; j++){

             if(addObj2[i].capacity>addObj2[j].capacity){

             let temp = addObj2[i];
             addObj2[i]= addObj2[j];

             addObj2[j]=temp;


      }
     }
    }
        console.log(addObj2);



 //Checking if objects in array fulfill a condition (color is red and type is cabrio)
 
for(i = 0; i<addObj2.length; i++){

  if(addObj2[i].color==='red' && addObj2[i].type === 'cabrio'){

    console.log("Checking if objects in array fulfill a condition is color is red and type is cabrio");

    console.log(addObj2[i]);
  
  }
}

 //Add new property into the objects name...

for(const i of addObj2) {
     i.Name = "";
     };
     console.log(addObj2);


//  Convert array of arrays into array of objects with prefilled values
    let Array = [ [10.6750, 20.7764],[11., 12.2], [22.1, 10.543], [24.222, 30.44]];
    let obj2 = [];
    let ind=0;


    for(let elem of Array){
      let obj={};
      obj["lat"]=elem[0];
      obj["lng"]=elem[1];
      obj2[ind++]=obj;  
    }
        
      console.log(obj2)    

  

     

        
