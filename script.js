alert("WELCOME TO OUR FOOD SUPPLEMENT SALES WEB PAGE")

let dad = document.querySelector("#dad");
let son = document.querySelectorAll("#son");

// console.log(son);


for (i=0; i < son.length; i++) {
        let plus = son[i].children[6].children[2];
        // console.log(plus);
        let moins = son[i].children[6].children[0];
        // console.log(moins);
        let qty = son[i].children[6].children[1];
        let btnplus = parseInt(qty.innerHTML);

        // console.log(qty.innerHTML);
        let price = son[i].children[4];
        let prix = parseInt(price.innerHTML)
        // console.log(price);
        let tprice = son[i].children[11];
        // console.log(tprice);
        let tpriceqty = son[i].children[11]
        // console.log(tpriceqty);

    plus.addEventListener ("click" , ()=> {
        btnplus++;
        qty.innerHTML = btnplus
        tprice.innerHTML = prix * btnplus
        // console.log(btnplus)
})

    moins.addEventListener ("click" , ()=> {
        let btnmoins = qty.innerHTML
       if (btnmoins > 0 ){
        btnmoins--;
        qty.innerHTML = btnmoins
        tprice.innerHTML = prix * btnmoins
       }
        
    })

    let btnlike = son[i].children[7]
// console.log(btnlike);
btnlike.addEventListener("click", ()=> {
    if (btnlike.style.color === "black") {
        btnlike.style.color = "red"
    }
    else {
        btnlike.style.color = "black";
    }
});



    // // Fonction pour supprimer un article du panier
    // let btnrmv = son[i].children[8]
    // function removeItem(btnrmv) {
    //     // Accéder à l'élément parent (div.item)
    //     var item = btnrmv.parentNode;

    //     // Supprimer l'élément du DOM
    //     btnrmv.parentNode.removeChild(item);
    // }
    
}

// var cart=[] ; 
// function addtocart(a){
// cart.push({...categories(a)}) ;
// displaycart();
// }

// function addtocart(a){
//     cart.splice(a , 1) ;
//     displaycart();
//     }
    
//     function displaycart(){
//         let j = 0, total = 0 ;
//         document.getElementById("count").innerHTML = cart.length ;
//        if(cart.length == 0){
//         document.getElementById("sum").innerHTML = "Your cart is empty" ; 
//         document.getElementById ("total").innerHTML = "$" + 0 + ".00 " ;
//        }
//        else{
//         document.getElementById("sum").innerHTML = cart.map((produit))
//           }
//           var 

//     }

