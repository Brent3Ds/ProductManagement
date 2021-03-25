// Product management Program

// products

let products = [
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
        name: "Keybaord",
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

const itemSearch = (productName,itemCode) => {
    let product = []
    for (let i = 0; i < products.length; i++){
        if (products[i] === productName || itemCode)
        product.push(product[i])
    }
}