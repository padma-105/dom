const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '9651bdaffemsh734b06b99f85475p10905djsnf127f4312e9e',
		'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
	}
};
async function getdata(){
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.data);
    let div=document.createElement("div")
     div.className="div"
    let h1=document.createElement("h1")

   let i=result.data
   let j=i.split("?")
   h1.innerText=j[0]+"?"
   let p=document.createElement("p")
   p.innerText=j[1]
   div.append(h1,p)
   document.body.append(div)
   p.className="p"
} 
catch (error) {
	console.error(error);
}
}
getdata()


