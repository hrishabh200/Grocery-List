showGrocery();
let using=document.getElementById("input2");
using.addEventListener('click',()=>{
    let add=document.getElementById("input1");
    let grocery=localStorage.getItem("grocery");
    let groceryItems=[];
    if(grocery==null)
    {
    groceryItems=[];
    }
    else
    {
   groceryItems=JSON.parse(grocery);
    }
 groceryItems.push(add.value);
   localStorage.setItem("grocery",JSON.stringify(groceryItems));
   add.value="";
   showGrocery();
});
function showGrocery()
{
    let grocery=localStorage.getItem("grocery");
    let groceryItems=[];
    if(grocery== null)
    {
    groceryItems= [];
    }
    else
    {
   groceryItems=JSON.parse(grocery);
    }
   let take="";
for(let i=0;i<groceryItems.length;i++)
   {
       take+=`<div id="div1">
       ${i+1} ${groceryItems[i]}
       <button id="${i}" onclick="deleteNote(this.id)" >Delete</button>
       </div>`
   }
let groceryElm=document.getElementById('div1');
if(groceryItems.length!=0)
{
groceryElm.innerHTML=take;
}
else
{
    
    groceryElm.innerHTML ="";
}
}
function deleteNote(index)
{
console.log("I am deleting grocery");
let grocery=localStorage.getItem('grocery');
if(grocery==null)
{
groceryItems=[];
}
else
{
groceryItems=JSON.parse(grocery);
}
groceryItems.splice(index,1);
localStorage.setItem("grocery",JSON.stringify(groceryItems));
showGrocery();
}