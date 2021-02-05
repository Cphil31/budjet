
window.onload = function () {
    
    let butSub = document.querySelector(".submit");
    
    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [];
    let divTotal = document.querySelector('.total');
    let divDelete = document.querySelector(".delete");
    
    
    let id = parseInt(0);
    
    
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("id", "buttonList")
    
    
    butSub.addEventListener("click", function (e) {
        
        let total = 0;
        
        let priceValue = parseFloat(inputPrice.value);
        
        let object = {
            "id": id,
            "product": `${inputProduct.value}`,
            "price": priceValue
        }
        

        
        id += 1;
        
        tabProduct.push(object);
        
        
        let li = document.createElement("li");
        li.setAttribute("id", id);
        
        
        li.innerHTML = `${id} : ${inputProduct.value} :  ${priceValue.toFixed(2)}  € `;
        menu.appendChild(li);
        
        for (p of tabProduct){
            total += p.price;
        }
        
       
        divTotal.innerHTML=`Total = ${total} €`;
   
        buttonDelete.innerHTML = "";
        buttonDelete.innerHTML = "suprimer le dernier produit "
        
        divDelete.appendChild(buttonDelete);
        
        
        
        e.preventDefault();
    })  // fin de boutton submit
    
    
    
    
    function remove(){
        
        menu.removeChild(menu.lastElementChild);
        let divTotal = document.querySelector(".total");
        //console.log(total);
        divTotal.innerHTML="";
        //récuperer la nouvelle somme
        tabProduct.pop();
        let newTotal = 0;

        for(x of tabProduct ){
            console.log(x);
            newTotal += x.price ;
        }
        console.log(newTotal);
        if (!newTotal){
            divTotal.innerHTML = ""; 
        }
        else{
            divTotal.innerHTML=`Total = ${newTotal} €`;
        }
        //total.innerHTML = `Total : ${total.toFixed(2)} €`
        //total.innerHTML = `Total : ${total.toFixed(2)} €`;
    }
    
    // au click du bouton 
    buttonDelete.addEventListener("click",function(){
        remove();
    }) // fin de  click du bouton

    
} //fin de on load 