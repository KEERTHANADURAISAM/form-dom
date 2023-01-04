
// the form create using table
let newHead=document.createElement('h1');
newHead.setAttribute('id','title')
var break1 = document.createElement("br")
let newPara=document.createElement('p');
newPara.setAttribute('id','description')
newPara.innerText="This is Dom-Form Updation.Please fill in all your details and  update the form and please select minimum of two food choices."
var break3= document.createElement("br")
newHead.textContent="FILL THE DETAILS TO ENJOY THE FOOD !!!";
newHead.style="text-align:center";
let newForm=document.createElement('form')
newForm.setAttribute("id","form")
let table1=document.createElement('table')
table1.setAttribute("id","tablerow")
let tr1=document.createElement('tr')
var td1=document.createElement('td')
td1.innerText="First Name*";
var td2=document.createElement('td')
 var td3=document.createElement('td')
var td4=document.createElement('td')
td4.innerText="Last Name*";

 let tr2=document.createElement('tr')
 let newInput1=document.createElement('INPUT')
newInput1.setAttribute('placeholder', 'First Name')
newInput1.setAttribute('id', 'first-name')
var td5=document.createElement('td')
var td6=document.createElement('td')
let newInput2=document.createElement('INPUT')
newInput2.setAttribute('placeholder', 'Last Name')
newInput2.setAttribute('id', 'last-name')
var break5 = document.createElement("br")

let tr3=document.createElement('tr')
let td7=document.createElement('td')
td7.innerText="Enter your Address";


let tr4=document.createElement('tr')
let newInput3=document.createElement('textarea')
newInput3.setAttribute('placeholder', 'Enter Full Address')
newInput3.setAttribute('id', 'address')

let tr5=document.createElement('tr')
var td8=document.createElement('td')
td8.innerText="State";
var td9=document.createElement('td')
 var td10=document.createElement('td')
var td11=document.createElement('td')
td11.innerText="Country";

let tr6=document.createElement('tr')
 let newInput4=document.createElement('INPUT')
newInput4.setAttribute('placeholder', 'State')
newInput4.setAttribute('id', 'state')
var td12=document.createElement('td')
var td13=document.createElement('td')
let newInput5=document.createElement('INPUT')
newInput5.setAttribute('placeholder', 'Country','required')
newInput1.setAttribute('id', 'country')

let tr7=document.createElement('tr')
var td14=document.createElement('td')
td14.innerText="pincode";

let tr8=document.createElement('tr')
let newInput6=document.createElement('INPUT')
 newInput6.setAttribute('placeholder', 'Pincode')
 newInput6.setAttribute('id', 'pincode')

let tr9=document.createElement('tr')
 tr9.innerHTML=
 `<label type="text">Gender</label><br></br>
 <input type="radio" name="gender" value="male" id="check1">Male
 <input type="radio" name="gender" value="female" id="check2">Female
 <input type="radio" name="gender" value="others" id="check3">Others<br><br>
 <label type="text">Choice of Food</label><br></br>
 <input type="checkbox" name="food" value="food" id="food1">Indian Cuisine<br>
 <input type="checkbox" name="food" value="food" id="food2">spanish Cuisine<br>
 <input type="checkbox" name="food" value="food" id="food3">Greek Cuisine<br>
 <input type="checkbox" name="food" value="food" id="food4">Italian Cuisine<br>
 <input type="checkbox" name="food" value="food" id="food5">Japanese Cuisine<br><br>
  `

let tr10 = document.createElement('tr')
let button1=document.createElement('button')
button1.setAttribute('id','submit')
button1.setAttribute('onclick','submit')
button1.innerText='Submit'

let table2=document.createElement('div')
table2.setAttribute('id','tablebody')
table2.innerHTML=
`<table id="table-design">
<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Address</th>
<th>Pincode</th>
<th>Food</th>
<th>Gender</th>
<th>State</th>
<th>Country</th>
</tr>
</table>
`
// append the elements to body body and table
document.body.append(newHead)
document.body.append(break1)
document.body.append(newPara)
document.body.append(break3)
document.body.append(newForm)

newForm.appendChild(table1)
table1.appendChild(tr1)
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td3)
tr1.appendChild(td4)
table1.appendChild(tr2)
tr2.appendChild(newInput1)
 tr2.appendChild(td5)
 tr2.appendChild(td6)
tr2.appendChild(newInput2)

table1.appendChild(tr3)
tr3.appendChild(td7)
tr3.appendChild(break5)

table1.appendChild(tr4)
tr4.appendChild(newInput3)

table1.appendChild(tr5)
tr5.appendChild(td8)
tr5.appendChild(td9)
tr5.appendChild(td10)
tr5.appendChild(td11)

table1.appendChild(tr6)
tr6.appendChild(newInput4)
 tr6.appendChild(td12)
 tr6.appendChild(td13)
tr6.appendChild(newInput5)

table1.appendChild(tr7)
tr7.appendChild(td14)

table1.appendChild(tr8)
tr8.appendChild(newInput6)

table1.appendChild(tr9)
table1.appendChild(tr10)
tr10.appendChild(button1)
newForm.appendChild(table2)


var fname=document.getElementById('first-name')
var lname=document.getElementById('last-name')
var address=document.getElementById('address')
var state=document.getElementById('state')
var country=document.getElementById('country')
var pin=document.getElementById('pincode')
var gender1=document.getElementsByName('gender')
document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()

});


var button=document.getElementById('submit')
 button.addEventListener('click', ()=>{
    if
    (fname!=null && lname!=null && address !=null && country !=null && pin !=null && state !=null && gender1==1 && food==2){
        var tablevalue=document.getElementById(tablebody)
       tablevalue.innerHTML +=
       `<tr>
       <td>${fname}</td>
       <td>${lname}</td>
       <td>${address}</td>
       <td>${pin}</td>
       <td>${food}</td>
       <td>${gender1}</td>
       <td>${state}</td>
       <td>${country}</td>
       </tr>
       `
    }
  })


