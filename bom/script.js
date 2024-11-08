let container=document.getElementById("container")
let input=document.getElementById("input")


input.addEventListener("input", () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let query = input.value.toLowerCase();
    if (data.length === 0) {
        alert("No Data Available");
    } else {
        let result = data.filter(obj =>
            obj.title.toLowerCase().includes(query) ||
            obj.category.toLowerCase().includes(query)
        );
        displayData(result);
    }
});

async function getData(){
    let res  = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    localStorage.setItem("data",JSON.stringify(data));
     displayData(data)
}

function displayData(data){
      container.innerHTML=""
      
       if(data.length === 0)
        alert("no data available")
        else{
            data.forEach((obj) => {
                  let div= document.createElement("div")
                  div.className="div1"
                  div.innerHTML=`
                  <p><i>ID : </i>${obj["id"]}</p>
                  <p><i>TITLE : </i>${obj["title"]}</p>
                  <p><i>PRICE : </i>${obj["price"]}</p>
                  <p><i>DESCRIPTION : </i>${obj["description"]}</p>
                  <p><i>CATEGORY : </i>${obj["category"]}</p>
                   <img src=${obj["image"]}>
                  `
                  container.appendChild(div)
            });
            
        }
        Body.append(container)
}

getData()