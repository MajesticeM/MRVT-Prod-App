//Version 01
//var urlList=["www.web01.com","www.web02.com","www.web03.com","www.web04.com"];
//console.log(urlList);
//var urlToBlock=document.getElementById("utb");
//var urlToBlock="Hello World";

//console.log(urlList);
/*for (let index = 0; index < urlList.length; index++) {
   if (urlToBlock==index) 
   {
       console.log("Website already blocked!")
   }
   else
   {
       urlList.push(urlToBlock);
       console.log(urlToBlock + " has been blocked!");
   }
    
}*/



//Version 02
var urlToBlock02=document.getElementById("utb");
var urlList02=[urlToBlock02.value];
console.log(urlList02);
function AddWebsite() {
    
    var DOMList=document.getElementById("blockedwebsites");
   
    
    for (let index02 = 0; index02 < urlList02.length; index02++) 
    {
        if (urlToBlock02.value==index02) 
       {
           console.log("Website already blocked!");
           
       }
       else
       {
            
           
           urlList02.push(urlToBlock02.value);
           var createList=document.createElement("li");
           var createBtn=document.createElement("BUTTON");
           createBtn.innerText="Delete Url";
           DOMList.appendChild(createList);
           createList.appendChild(createBtn);
           createList.innerText = document.createTextNode(urlToBlock02.innerText);
           console.log(urlToBlock02.value + " has been blocked!");
           console.log(urlList02);
       }
       break;
        
    } 
}
