// Preentrega Proyecto Final de Lucas Almada



const productos = [
    {nombre: "Camiseta Titular de juego Argentina 2022", precio: 28999},
    {nombre: "Camiseta Alternativa de juego Argentina 2022", precio: 28999},
    {nombre: "Camiseta Titular Argentina 2022", precio: 16999},
    {nombre: "Camiseta Alternativa Argentina 2022", precio: 16999},
    {nombre: "Camiseta Arquero Argentina 2022", precio: 16999},
    {nombre: "Short Titular Argentina 2022", precio: 9999},
    {nombre: "Short Alternativo Argentina 2022", precio: 9999},
    {nombre: "Medias Titular Argentina 2022", precio: 3499},
    {nombre: "Medias Alternativa Argentina 2022", precio: 3499},
    {nombre: "Pelota Al Rihla Pro", precio: 44999},
];

let carrito = []

let eleccion = prompt ("¿Bienvenido! Esta es la página oficial de Argentum, ¿Desea adquirir alguno de nuestros productos?")

while (eleccion != "si" && eleccion != "no"){
    alert ("Por favor, ingrese si o no")
    eleccion = prompt("¿Bienvenido! Esta es la página oficial de Argentum, ¿Desea adquirir alguno de nuestros productos?");
}

if (eleccion == "si"){
    alert ("¡Genial! Esta es la lista completa de nuestros productos")
    let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
    alert (todoslosProductos.join(" - "));
} else if (eleccion == "no"){
    alert("¡Que lástima!");
}

while (eleccion != "no"){
    let producto = prompt ("Agregue un producto a su carrito de compras");
    let precio = 0;


    if (producto == "Camiseta Titular de juego Argentina 2022" 
    || producto == "Camiseta Alternativa de juego Argentina 2022" 
    || producto == "Camiseta Titular Argentina 2022" 
    || producto == "Camiseta Alternativa Argentina 2022" 
    || producto == "Camiseta Arquero Argentina 2022"
    || producto == "Short Titular Argentina 2022"
    || producto == "Short Alternativo Argentina 2022"
    || producto == "Medias Titular Argentina 2022"
    || producto == "Medias Alternativa Argentina 2022"
    || producto == "Pelota Al Rihla Pro"){


        switch (producto){
            case "Camiseta Titular de juego Argentina 2022":
                precio = 28999;
                break;
            case "Camiseta Alternativa de juego Argentina 2022":
                precio = 28999;
                break;
            case "Camiseta Titular Argentina 2022":
                precio = 16999;
                break;
            case "Camiseta Alternativa Argentina 2022":
                precio = 16999;
                break;
            case "Camiseta Arquero Argentina 2022":
                precio = 16999;
                break;
            case "Short Titular Argentina 2022":
                precio = 9999;
                break;
            case "Short Alternativo Argentina 2022":
                precio = 9999;
                break;
            case "Medias Titular Argentina 2022":
                precio = 3499;
                break;
            case "Medias Alternativa Argentina 2022":
                precio = 3499;
                break;
            case "Pelota Al Rihla Pro":
                precio = 44999;
                break;
            
            default:
                break;
        }


        let unidades = parseInt (prompt ("Ingrese la cantidad de unidades"))
        
        carrito.push({producto, unidades, precio})
        console.log(carrito);
    }else {
        alert ("El producto solicitado no tiene stock, ¡lo sentimos mucho!")
    }

    eleccion = prompt ("¿Desea seguir con su compra?")



    if (eleccion == "si"){
        alert ("¡Genial! Esta es la lista completa de nuestros productos")
        let todoslosProductos = productos.map((producto) => producto.nombre + " $" + producto.precio);
        alert (todoslosProductos.join(" - "));

    } else if (eleccion == "no"){
        alert("¡Gracias por su compra! Estos son los productos que ha comprado y el total a pagar");
    
        carrito.forEach(carritoFinal =>{
            alert(`Producto: ${carritoFinal.producto},Unidades: ${carritoFinal.unidades};
            Precio: $ ${carritoFinal.precio};
             Subtotal Producto: $ ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }   
}


const total = carrito.reduce((total, producto) => total + producto.precio * producto.unidades,0)
alert (`El total a pagar por su compra es: $ ${total}`);
alert("Gracias por visitar Argentum, ¡te esperamos la próxima!");