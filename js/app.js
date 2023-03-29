let auto = {
    color: "rojo",
    marca: "Ferrari",
    modelo: 1995,
    encender: ()=>{
        document.write(`auto encendido`);
    },
    apagar: ()=>{
        document.write(`El auto se apagó`)
    }
}

let cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad){
        this.saldo += cantidad;
    },
    extraer: function(cantidad){
        this.saldo -= cantidad;
    },
    informar: function(){
        document.write(`Saldo de ${this.titular}: ${this.saldo}`);
    }
}

/*Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o
falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos 
para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y 
buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie 
‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a 
mostrar todos por pantalla.
*/

let persona = {
    nombre: "Chat",
    apellido: "GPT",
    edad: "2 años",
    estudiante: true,
    hobbies: ["Ayudar a la gente a completar sus trabajos", "adivinador de cosas", "apoderarse progresivamente del mundo"],
    presentarPersona: function(){
        console.log(`Hola mi nombre es ${this.nombre + " " + this.apellido}`);
        console.log(`Tengo ${this.edad}`);
        console.log(`Mis hobbies son:`);
        this.hobbies.forEach(element => {
            console.log(element);
        });
    },
    agregarHobbie: (hobbie)=>{
        persona.hobbies.push(hobbie);
    },
    borrarHobbie: (hobbie)=>{
        for(let i = 0; i < persona.hobbies.length; i++){
            if(persona.hobbies[i] === hobbie){
                persona.hobbies.splice(i, 1);
            }
        }
    },
    buscarHobbie: (hobbie)=>{
        let hobbieABuscar = persona.hobbies.find(hobbie_ => hobbie_.includes(hobbie));
        document.write(`<p>${ hobbieABuscar === undefined ? 'hobbie no encontrado' : hobbieABuscar }</p>`)
    }
}

/*
Con el siguiente array de objetos, crear una funcion que permita dibujar una tabla con las columnas 
Producto - categoria - precio. Realizar las siguientes tareas:

Mostrar la tabla completa

filtrar el arreglo de productos por ‘Protectores solares' y mostrar la tabla filtrada.

Buscar un producto serum y mostrarlo por pantalla,

Buscar un producto 'Bruma’ y mostrar un mensaje adecuado para el usuario si el producto 
no existe en el array.
*/

let listaProductos = [
    {
        nombreProducto: "Hidratante facial",
        precio: 3500,
        categoria: "Hidratante",
    },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
        nombreProducto: "Protector solar factor 50",
        precio: 3300,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar toque seco factor 50",
        precio: 4100,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Protector solar con color factor 50",
        precio: 3850.5,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Gel de limpieza facial",
        precio: 1740.99,
        categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
        nombreProducto: "Exfoliante de azúcar cherry",
        precio: 1200,
        categoria: "Labios",
    },
    {
        nombreProducto: "Pads de hidrogel para contorno de ojos",
        precio: 2800,
        categoria: "Ojos",
    },
    {
        nombreProducto: "Mascarilla facial",
        precio: 3250.99,
        categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
        nombreProducto: "Protector solar en barra",
        precio: 3800,
        categoria: "Protector solar",
    },
    {
        nombreProducto: "Mascara de hidratación y reparación",
        precio: 1200,
        categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
];


function mostrarTabla(array){
    let partial = (`
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoria</th>
            </tr>
        </thead>
        <tbody>`);
    array.forEach(element => {
        partial += (`
        <tr>
            <td>${element.nombreProducto}</td>
            <td>&dollar; ${element.precio}</td>
            <td>${element.categoria}</td>
        </tr>`)
    });
    partial += (`
        </tbody>
    </table>`)
    document.getElementById("ejercicio3_tabla").innerHTML = partial;
}

function filtrar(array,elementoAFiltrar){
    let resultados = array.filter( producto => producto.categoria.includes(elementoAFiltrar));
    mostrarTabla(resultados);
}

function buscar(array, elementoABuscar){
    let html_partial;
    let resultado = array.find( producto => producto.categoria.includes(elementoABuscar));
    if(resultado === undefined){
        document.getElementById("ejercicio3_tabla").innerHTML = (`Producto <strong>${elementoABuscar}</strong> no encontrado`);
    }else{
        document.getElementById("ejercicio3_tabla").innerHTML = (`
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${resultado.nombreProducto}</td>
                        <td>${resultado.precio}</td>
                        <td>${resultado.categoria}</td>
                    </tr>
                </tbody>
        </table>
        `)
    }
}
