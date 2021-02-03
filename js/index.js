window.onload = function () {

    let butSub = document.querySelector(".submit");

    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [];
    let divTotal = document.querySelector('.total');
    let divDelete = document.querySelector(".delete");
    
    
    let total = parseFloat(0);
    let id = parseInt(0);
    
    
    let button = document.createElement("button");
    button.setAttribute("id", "buttonList")
    button.setAttribute("onClick","remove()")
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
        
        
        
        button.innerHTML = "";
        button.innerHTML = "effacer la liste";
        
        divDelete.appendChild(button);
        
        
        
        
        let buttonList = document.querySelector("#buttonList");
        
        
    
        e.preventDefault();
    })
    
    
}