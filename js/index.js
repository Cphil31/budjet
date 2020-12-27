

window.onload = function () {

    let butSub = document.querySelector(".submit");

    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [] ;
    let divTotal = document.querySelector('.total')
    
    
    let divList = document.querySelector(".list");
    let ul = document.createElement("ul");
    ul.setAttribute("id","menu");
    divList.appendChild(ul);
    
    
    let total = parseFloat(0) ;
    let id = parseInt(0);
    
    
    let button = document.createElement("button");
    button.setAttribute("id","buttonList")
    
    butSub.addEventListener("click",function(e){
        
        id+=1;
        
        let object = { 
            "id" : id, 
            "product" : `${inputProduct.value}` , 
            "price" : inputPrice.value }
            
        tabProduct.push(object);
        
        
        let li = document.createElement("li");
        li.setAttribute("id",id);
        
        
        li.innerHTML = `${id} : ${inputProduct.value} :  ${inputPrice.value} € `;
        ul.appendChild(li); 
        
            
        total = total + parseFloat(inputPrice.value) ;


        divTotal.innerHTML = `Total : ${total.toFixed(2)} €`;
        
  
        
        button.innerHTML="";
        button.innerHTML = "supprimer";

        document.body.appendChild(button);

        let buttonList = document.querySelector("#buttonList");
        let getUl = document.getElementById('menu');

        
        buttonList.addEventListener("click",function(){
            /*
            console.log(ul.lastChild);
            ul.lastChild.removeChild();
            */
           getUl.removeChild(getUl.lastElementChild);
           
        })

        e.preventDefault();
    })
    
    
}
