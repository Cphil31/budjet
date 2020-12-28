window.onload = function () {

    let butSub = document.querySelector(".submit");

    let inputProduct = document.querySelector("input[name ='product']");
    let inputPrice = document.querySelector("input[name ='price']");
    let tabProduct = [];
    let divTotal = document.querySelector('.total')
    let menu = document.getElementById("menu")

    ;
    let total = parseFloat(0);
    let id = parseInt(0);


    let button = document.createElement("button");
    button.setAttribute("id", "buttonList")

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
        button.innerHTML = "supprimer";

        document.body.appendChild(button);

        let buttonList = document.querySelector("#buttonList");


        buttonList.addEventListener("click", function () {

            let length = parseInt(tabProduct.length);
            total = 0;
            id = 0;
            divTotal.innerHTML = "";
            menu.removeChild(menu.childNodes[0]);

        })

        e.preventDefault();
    })


}