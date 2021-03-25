// Product management Program

// products

let items = [
    {
        name: "Speakers",
        id: "ABAU000138",
        discription: "plays sounds",
        price: "$49.99",
        instock: 0
    },
    {
        name: "Ram",
        id: "RAMCS00120",
        discription: "Comp memory",
        price: "$159.99",
        instock: 0
    },
    {
        name: "MotherBoard",
        id: "MBASU000328",
        discription: "Computer part",
        price: "$219.99",
        instock: 0
    },
    {
        name: "Keyboard",
        id: "RAZK000080",
        discription: "razer keybaord",
        price: "$145.99",
        instock: 0
    },
    {
        name: "Mouse",
        id: "MARAZ00075",
        discription: "razer mouse",
        price: "$89.99",
        instock: 0
    }
]

// Product select
/*
const itemSearch = (ProductName,itemCode) => {
    let product = []
    for (let i = 0; i < items.length; i++){
        if (items[i].name = ProductName || items[i].id = itemCode){
            product.push(items[i])
        }
    }
    return product
}
//console.log(itemSearch("RAZK000080",))

//BREOKEN ^^^^
*/
// Add to instock count

const incomeing = (numz) => {
    let stock = (numz + items.instock)
    if (items.instock > 0){
        items.instock = stock
    }
}

incomeing(7)