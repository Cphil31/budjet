window.onload = function () {

    let butSub = document.querySelector(".submit");

    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [] ;
    let divTotal = document.querySelector('.total')

    
    let divList = document.querySelector(".list");
    let ul = document.createElement("ul");
    divList.appendChild(ul);


    let total = parseFloat(0) ;
    
    butSub.addEventListener("click",function(e){
        
        let object = {"product" : `${inputProduct.value}` , "price" : inputPrice.value }
        
        tabProduct.push(object);
        
        let li = document.createElement("li");
        li.innerHTML = `${inputProduct.value} :  ${inputPrice.value} €`;
        ul.appendChild(li); 
        
        total = total + parseFloat(inputPrice.value) ;


        divTotal.innerHTML = `Total : ${total.toFixed(2)} €`;
        e.preventDefault();
    })
    


}