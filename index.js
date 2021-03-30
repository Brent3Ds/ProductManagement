// Product management Program

// products

let items = [
    {
        name: "Speakers",
        id: "ABAU000138",
        discription: "plays sounds",
        price: "$49.99",
        instock: 0,
        requestOrder: 0,
        onHold: 0,
        salable: 0

    },
    {
        name: "Ram",
        id: "RAMCS00120",
        discription: "Comp memory",
        price: "$159.99",
        instock: 0,
        requestOrder: 0,
        onHold: 0,
        salable: 0
    },
    {
        name: "MotherBoard",
        id: "MBASU000328",
        discription: "Computer part",
        price: "$219.99",
        instock: 0,
        requestOrder: 0,
        onHold: 0,
        salable: 0
    },
    {
        name: "Keyboard",
        id: "RAZK000080",
        discription: "razer keybaord",
        price: "$145.99",
        instock: 0,
        requestOrder: 0,
        onHold: 0,
        salable: 0
    },
    {
        name: "Mouse",
        id: "MARAZ00075",
        discription: "razer mouse",
        price: "$89.99",
        instock: 0,
        requestOrder: 0,
        onHold: 0,
        salable: 0
    }
]

// Product select

const itemSearch = (ProductName) => {
    let product = []
    for (let i = 0; i < items.length; i++){
        if (items[i].name === ProductName || items[i].id === ProductName){
            product.push(items[i])
        }
    }
    return product
}
//console.log(itemSearch("RAZK000080"))

// Add to instock count

const incoming = (numz,Psearch) => {
    for (let i = 0; i < items.length; i++){
            let stock = numz + items[i].instock
                if (items[i].name === Psearch || items[i].id === Psearch) {
                    items[i].instock = stock
                        //console.log(stock)
            }

    }
}


// Remove instock count

const remove = (numz,Psearch) => {
    for (let i = 0; i < items.length; i++){
        let stock = items[i].instock - numz
            if (items[i].name === Psearch || items[i].id === Psearch) {
                items[i].instock = stock
                    //console.log(stock)
            }
    }
}

// Ordering an Item

const request = (numz,Psearch) => {
    for ( i = 0; i < items.length; i++) {
        let rO = items[i].requestOrder + numz
            if (items[i].name === Psearch || items[i].id === Psearch) {
                items[i].requestOrder = rO
                    //console.log(rO)
            }
    }
}

 request(5,"Mouse")
console.log(itemSearch("Mouse"))