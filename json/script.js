const URL="http://localhost:3000/items";
let options={
    "method":"POST",
    "header":{
        "Content-Type":"application/json"
    },
    "body":JSON.stringify({
        "id":"109",
        "name":"lemon"
    })
}
  fetch(URL,options)
   .then(response=>{
    if(response.ok){
        console.log("Inserted :",response.status,response.statusText)
    }
   })