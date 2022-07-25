
const sumarIva = (precio) => {return precio * 1.21}
const mostrarMensaje = (mensaje) => { alert(mensaje) }
const descuento25 = (precio) => {return precio * 0.75}
const descuento10 = (precio) => {return precio * 0.90}

let precioCerveza = 0;

function tomarCerveza()
{
    let marca = prompt("Km24.7\nVeraIpa\nWeisse\nAmber Lager\nBoemian Pilsener\nHoppy Lager");
    let cantidad = parseInt(prompt(">Ingrese cantidad de cervezas"))
    let hayStock = consultarStock(marca);


    if(hayStock)
    {
        mostrarMensaje("Precio con Iva y descuento de "+ cantidad + " cervezas Patagonia " + marca + " es de de $ " + precioCerveza * cantidad);
        tomarCerveza()
    }
    else
    {
        mostrarMensaje("No tenemos stock de "+ marca);
       tomarCerveza();
    }
}
tomarCerveza();



function consultarStock(marca)
{
    if(marca == "Km24.7") //con descuento 25%
    {
        precioCerveza = sumarIva(descuento25(350));
        return true; 

    }
    else if(marca == "VeraIpa") //con descuento 25%
    {
        precioCerveza = sumarIva(descuento25(300));
        return false; 
    }
    else if(marca == "Weisse") //con descuento 10%
    {
        precioCerveza = sumarIva(descuento10(320));
        return true;
    }
    else if(marca == "Amber Lager") //sin descuento
    {
        precioCerveza = sumarIva(290);
        return false;
    }
    else if(marca == "Boemian Pilsener") //con descuento 10%
    {
        precioCerveza = sumarIva(descuento10(290));
        return true;
    }
    else if(marca == "Hoppy Lager") //sin descuento
    {
        precioCerveza = sumarIva(330);
        return true;
    }
    else
    {
        return false;
    }
}
















































