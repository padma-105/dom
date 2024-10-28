//task-1
let p1 = document.createElement("p")

p1.innerText="Welcome to JavaScript DOM manipulation"

p1.className="paragraph"

document.body.appendChild(p1)

//task-2
let div=document.createElement("div");
let h11 =document.createElement("h1");
let h22 =document.createElement("h2");

h11.innerText="Document Object Model"
h22.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit."
div.className="container"
h11.style.color="blue"
h22.style.color="green"
div.append(h11,h22)
document.body.append(div)

//task-3
let ul =document.createElement("ul")
let l1=document.createElement("li")
let l2=document.createElement("li")
let l3=document.createElement("li")
l1.innerText="ul tag1"
l2.innerText="ul tag2"
l3.innerText="ul tag3"
ul.append(l1,l2,l3)
document.body.appendChild(ul)

document.body.append(ul)

//task-4

let table=document.createElement("table")
let tr1=document.createElement("tr")
let tr2=document.createElement("tr")
let td1=document.createElement("td")
let td2=document.createElement("td")
let th1=document.createElement("th")
let th2=document.createElement("th")

table.className="table"
th1.innerText="product"
th2.innerText="price"
td1.innerText="book"
td2.innerText="50$"
table.append(tr1,th1,th2,tr2,td1,td2)
document.body.appendChild(table)


//task-6

let ol1=document.createElement("ol")
let ol2=document.createElement("ol")
let l11=document.createElement("li")
let l22=document.createElement("li")
let l33=document.createElement("li")
l11.innerText="ol tag1"
l22.innerText="ol tag2"
l33.innerText="ol tag3"
ol2.innerText="nested ol tag"
ol1.innerText="main ol tag"

ol2.append(l11,l22,l33)
ol1.appendChild(ol2)
document.body.append(ol1)

//task-7

let section=document.createElement("section")
let h12=document.createElement("h1")
let p33=document.createElement("p")
 h12.innerText="DOM"
 p33.innerText="create a section with heading and paragraph"
 section.className="section"
 
 section.append(h12,p33)
 document.body.appendChild(section)

 

//task-8

let div4=document.createElement("div")
let blockquote=document.createElement("blockquote")
blockquote.innerText="every tag is object in DOM"

blockquote.cite="#"
div4.appendChild(blockquote)
document.body.appendChild(div4)

//task-9

let dl=document.createElement("dl")
let dt1=document.createElement("dt")
let dt2=document.createElement("dt")
let dt3=document.createElement("dt")
let dd1=document.createElement("dd")
let dd2=document.createElement("dd")
let dd3=document.createElement("dd")
let l12=document.createElement("li")
let l23=document.createElement("li")
let l34=document.createElement("li")

l12.innerText="ol tag1"
l23.innerText="ol tag2"
l34.innerText="ol tag3"
dl.innerText="description list"
dt1.innerText="description term1"
dt2.innerText="description term2"
dt3.innerText="description term3"
dd1.innerText="description data1"
dd2.innerText="description data2"
dd3.innerText="description data3"
dl.append(dt1,dd1,l12,dt2,dd2,l23,dt3,dd3,l34)
document.body.append(dl)


//task-10

let div2=document.createElement("div")
let para1=document.createElement("p")
let para2=document.createElement("p")
let para3=document.createElement("p")

div2.style.border="5px double green"
div2.style.textAlign="center"
para1.innerText="paragraph1"
para1.style.backgroundColor="orange"
para2.innerText="paragraph2"
para2.style.backgroundColor="red"
para3.innerText="paragraph3"
para3.style.backgroundColor="darkred"


div2.append(para1,para2,para3)
document.body.appendChild(div2)


//task-5


let div5 = document.createElement("div");
let img5 = document.createElement("img");
let p5 = document.createElement("p");
// Container
div5.className = "container5";

// Image
img5.src = "./img.jpg";
img5.className = "img5";
img5.alt = "Cat Image";

// Paragraph
p5.innerText = "image object";

// div.appendChild(img);
// div.appendChild(p);

div5.append(img5, p5);
document.body.appendChild(div5);

