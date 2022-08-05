
class Cerveza {
    constructor(id, nombre, precio, color, ABV, IBU, cervezas) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.color = color;
      this.ABV = ABV;
      this.IBU = IBU;
      this.cervezas = cervezas;
    }
  }
  const cervezas = [];
  cervezas.push(new Cerveza(1, "KM 24.7", 350, "RUBIA", 4.55, 36.0, true));
  cervezas.push(new Cerveza(2, "VERA IPA", 290, "RUBIA", 5.8, 20.0, true));
  cervezas.push(new Cerveza(3, "WEISSE", 320, "RUBIA", 5.8, 20.0, false));
  cervezas.push(new Cerveza(4, "AMBER LAGER", 290, "ROJA", 4.5, 14.5, true));
  cervezas.push(new Cerveza(5, "BOEMIAN PILSENER", 290, "RUBIA", 5.2, 18.0, true));
  cervezas.push(new Cerveza(6, "HOPPY LAGER", 330, "RUBIA", 5.1, 18.0, false));
  cervezas.push(new Cerveza(7, "PORTER", 330, "NEGRA", 5.5, 35.0, true));
  console.table(cervezas);
  
  // Buscador por nombre
  
  function buscarCerveza(deposito, cerveza) {
    const cenvezaEncotrada = deposito.find((cerv) => cerv.nombre == cerveza);
    return cenvezaEncotrada;
  }
  let cervezaBuscada = prompt("Ingresa el nombre de la cerveza").toUpperCase();
  const encontrado = buscarCerveza(cervezas, cervezaBuscada);
  if (encontrado != undefined) {
    console.log(encontrado);
  } else {
    console.log("Cerveza no encontrado");
  }
  
  // Filtor por color de cerveza
  function filtroCerveza(deposito, color) {
    
    const cervezasFiltradas = deposito.filter((cerv) => cerv.color == color);
    return cervezasFiltradas; 
  }
  let colorBuscado = prompt(
    "Ingresa el color de la cerveza que quieres buscar").toUpperCase();
  const Cervezacolor = filtroCerveza(cervezas, colorBuscado);
  if (Cervezacolor != undefined) {
    console.table(Cervezacolor);
  } else {
    console.log("No se encontraron coincidencias");
  }
  
  const preciosCervezas = cervezas.map((cerveza) => {
    return {
      nombre: cerveza.nombre.toLowerCase(),
      precioSiniva: cerveza.precio,
      precioConiva: cerveza.precio * 1.21,
    };
  });
  
  console.table(preciosCervezas);
  
  // armar presupuesto
  function presupuesto() {
    console.log(cervezas);
    for (let art of cervezas) {
    }
  
    let acumulador = 0;
    let calculo = true;
    while (calculo) {
      let artIngresado = parseInt(
        prompt(`Ingrese id del articulo a sumar:
          1 - KM 24.7
          2 - Vera Ipa
          3 - Weisse
          4 - Amber Lager
          5 - Boemian Pilsener
          6 - Hoppy lager
          7 - Porter
          `)
      );
  
      for (let art of cervezas) {
        if (art.id === artIngresado) {
          acumulador = acumulador + art.precio;
        }
      }
  
      let msj = parseInt(
        prompt(`1 - si quieres seguir comprando 
          0 - si quieres salir`)
      );
      if (msj === 1) {
        console.log(`suma ${acumulador}`);
      } else {
        console.log("Su monto a pagar son $", acumulador);
        calculo = false;
      }
    }
  }
  
  function preguntarOpcion() {
    let opcion = parseInt(
      prompt(`Ingrese el número de la opción que desea realizar:
          1 - Buscar cerveza
          2 - Filtrar por color de cerveza                         
          3 - Hacer presupuesto
          0 - Para salir
          `)
    );
    menu(opcion);
  }
  
  function menu(opcionSeleccionada) {
    switch (opcionSeleccionada) {
      case 0:
        salir = true;
        alert(`Gracias por visitarnos, vuelva pronto :D`);
        break;
      case 1:
        buscarCerveza();
  
        break;
      case 2:
        filtroCerveza();
        break;
      case 3:
        presupuesto ();
        break;
  
      case 4:
        break;
      default:
        alert(`Ingrese una opción correcta`);
    }
  }
  let salir;
  while (salir != true) {
    preguntarOpcion();
  }





































