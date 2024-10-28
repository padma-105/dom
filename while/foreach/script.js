function multiply(arr) {
    return arr.map (num => num*2)
}
const i=[1,2,3,4,5]
const new_arr= multiply(i)
console.log(new_arr)

const strings= ["chicken", "mutton", "paneer","prawns"]
const newstrings = strings.map(str => str.toUpperCase())
console.log(newstrings)


    let students = [
        { name: 'slicy', score: 100 },
        { name: 'baby', score: 75 },
        { name: 'naini', score: 95 }
      ];
      const studentNames = students.map(student => student.name);
      console.log(studentNames);


let arr=[1,2,3,4,5,6,7,8,9]
 console.log(arr.filter(function(ele){
    return ele%2==0;
 }))


 let arr_1 =["cake" , "juice" , "pizza" , "ice" , "burger"]
 let newarr = arr_1.filter((ele) => {
  return ele.length < 5;
});
console.log(newarr)

 const arr_2=[20,60,10,80,90,110,56,99,35]
 const res= arr_2.filter(ele => ele > 50);
 console.log(res)



 var array = [68 , 52 , 45 , 25 , 65 , 35 , 75 , 95 , 12];
      var newArr = array.forEach(ele => console.log(ele))
    //  console.log(newArr)


       var array_1 = [68 , 52 , 45 , 25 , 65 , 35 , 75 , 95 , 12];
      sum = 0;
      var newArr = array_1.forEach(ele =>{ 
          sum += ele;
         })
         console.log(sum)


         let products = [
              { name: "Laptop", price: 1200 },
              { name: "Phone", price: 800 },
              { name: "buds", price: 500 }
            ];
            
            products.forEach((product) => {
              console.log((products[0].name),(products[0].price));
            });
          


        //  let students_ = [
        //     { name: 'slicy', score: 100 },
        //     { name: 'baby', score: 75 },
        //     { name: 'naini', score: 95 }
        //   ];
        //  students_.forEach((student)=> {
        //     console.log(${students.name}:$${students.score});
        //  })


        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          
          numbers
            .filter((num) => num % 2 === 0) // Keep only even numbers
            .map((num) => num * 3) // Multiply each even number by 3
            .forEach((num) => console.log(num)); // Print each resulting value
 