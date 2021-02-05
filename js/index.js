
window.onload = function () {
    
    let butSub = document.querySelector(".submit");
    
    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [];
    let divTotal = document.querySelector('.total');
    let divDelete = document.querySelector(".delete");
    let total = parseFloat(0);
    
    
    let id = parseInt(0);
    
    
    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute("id", "buttonList")


    butSub.addEventListener("click", function (e) {
        
        id += 1;
        
        let priceValue = parseFloat(inputPrice.value);
        
        
        let object = {
            "id": id,
            "product": `${inputProduct.value}`,
            "price": priceValue
        }
        
        tabProduct.push(object);
        
        
        let li = document.createElement("li");
        li.setAttribute("id", id);
        
        
        li.innerHTML = `${id} : ${inputProduct.value} :  ${priceValue.toFixed(2)}  € `;
        menu.appendChild(li);
        
        
        total = parseFloat(total) + parseFloat(priceValue);
        //total = 3 ;
        
        divTotal.innerHTML = `Total : ${total.toFixed(2)} €`;
        
        
        
        buttonDelete.innerHTML = "";
        buttonDelete.innerHTML = "suprimer produit "
        
        divDelete.appendChild(buttonDelete);

        
        
        e.preventDefault();
    })  // fin de boutton submit
    
    
    /*
    */
    function remove(){
        menu.removeChild(menu.lastElementChild);
        let divTotal = document.querySelector(".total");
        //console.log(total);
        divTotal.innerHTML="";
        //récuperer la nouvelle somme
        
        console.log(divTotal);
        console.log(total);
        //total.innerHTML = `Total : ${total.toFixed(2)} €`
        //total.innerHTML = `Total : ${total.toFixed(2)} €`;
    }
    
    // au click du bouton 
    buttonDelete.addEventListener("click",function(){
        console.log("delete button");
        remove();
    }) // fin de  click du bouton

    
} //fin de on load 