//https://fakestoreapi.com/products
let table=document.createElement("table")
let thead=document.createElement("thead")
let trhead=document.createElement("tr")
let arr=[ "id","title","price","description","category","image","rating"]
for(let element of arr){
    let th=document.createElement("th")
    th.innerText=element;
    trhead.appendChild(th)
}
let tbody=document.createElement("tbody")

 let getData=async ()=> {
    let res= await fetch("https://fakestoreapi.com/products")
    let data= await res.json()
     for(let obj of data){
        let tr=document.createElement("tr")
        for(let key in obj){
            let td=document.createElement("td")
            if(key === "rating"){
                td.innerText= `${obj[key]["rate"]} - (${obj[key]["count"]})`
            }
            else if(key === "image"){
                let img=document.createElement("img")
                img.src=obj[key]  
                td.appendChild(img)
            }
            else{
                td.innerText=obj[key]
            }
            tr.appendChild(td)
        }
        tbody.appendChild(tr)

     }
     appendData();
 }
 getData()
 function appendData(){
    thead.appendChild(trhead)
    table.append(thead,tbody)
    document.body.append(table)
 }
