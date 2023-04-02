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

class Rectangulo{
    constructor(alto, ancho){
        this._alto = alto;
        this._ancho = ancho;
    }

    get alto(){
        return this._alto;
    }

    get ancho(){
        return this._ancho;
    }

    set alto(altura){
        this._alto = altura;
    }

    set ancho(base){
        this._ancho = base;
    }
    calcularPerimetro(){
        console.log((this._alto + this._ancho) * 2);
    }
    calcularArea(){
        console.log(this._alto * this._ancho);
    }
}

class Producto{
    constructor(codigo, nombre, precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }

    get codigo(){
        return this._codigo;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    set codigo(nuevoCodigo){
        this._codigo = nuevoCodigo;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    set precio(nuevoPrecio){
        this._precio = nuevoPrecio;
    }
    
    imprimirDatos(){
        return document.write(`<p>Código: ${this._codigo}</p>
        <p>Nombre producto: ${this._nombre}</p>
        <p>Precio: &dollar; ${this._precio}</p>`);
    }
}

const producto1 = new Producto("001", "Taco de pollo", 300);
const producto2 = new Producto("002", "Taco de carne", 300);
const producto3 = new Producto("003", "Quesadilla napolitana", 250);

const arrayProductos = [];
arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);

arrayProductos.forEach(element => {
    element.imprimirDatos();
});

const generaciones = [["Silent Generation", "Austeridad"],
    ["Baby Boom", "Ambición"], 
    ["Generación X","Obsesión por el exito"],
    ["Generación Y", "Frustración"],
    ["Generación Z - Millenials", "Irreverencia"]];

class Persona{
    constructor(nombre, edad, DNI, sexo, peso, altura, anioNacimiento){
        this._nombre = nombre;
        this._edad = edad;
        this._DNI = DNI;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._anioNacimiento = anioNacimiento;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get DNI(){
        return this._DNI;
    }

    get sexo(){
        return this._sexo;
    }

    get peso(){
        return this._peso;
    }

    get altura(){
        return this._altura;
    }

    get anioNacimiento(){
        return this._anioNacimiento;
    }

    mostrarGeneracion(){
        if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) console.log(`Generación: ${generaciones[0][0]}. Rasgo característico: ${generaciones[0][1]}`);
        if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) console.log(`Generación: ${generaciones[1][0]}. Rasgo característico: ${generaciones[1][1]}`);
        if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) console.log(`Generación: ${generaciones[2][0]}. Rasgo característico: ${generaciones[2][1]}`);
        if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) console.log(`Generación: ${generaciones[3][0]}. Rasgo característico: ${generaciones[3][1]}`);
        if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) console.log(`Generación: ${generaciones[4][0]}. Rasgo característico: ${generaciones[4][1]}`);
    }
    esMayorDeEdad(){
        this._edad >= 18? console.log(`La persona es mayor de edad.`):console.log(`La persona no es mayor de edad.`);
    }

    mostrarDatos(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`DNI: ${this.DNI}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Peso: ${this.peso}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Año de nacimiento: ${this.anioNacimiento}`);
    }

    generarDNI(){
        return Math.floor(Math.random() * 6000000) + 1;
    }
}
/* 
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método
mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro{
    constructor(isbn, titulo, autor, numeroDePaginas){
        this._ISBN = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._numeroDePaginas = numeroDePaginas;   
    }

    get isbn(){
        return this._ISBN;
    }

    get autor(){
        return this._autor;
    }

    get titulo(){
        return this._titulo;
    }

    get numeroDePaginas(){
        return this._numeroDePaginas;
    }

    set isbn(isbn){
        this._ISBN = isbn;
    }

    set titulo(titulo){
        this._titulo = titulo;
    }

    set autor(autor){
        this._autor = autor;
    }

    set numeroDePaginas(numeroDePaginas){
        this._numeroDePaginas = numeroDePaginas;
    }

    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas`);
    }
}

const l1 = new Libro(46878945436,"La cancha de tu hermana", "yo mero", 5);
const l2 = new Libro(46878945435,"Me caigo en todo", "yo tambien", 4);

l1.numeroDePaginas > l2.numeroDePaginas?
console.log(`El libro "${l1.titulo}" tiene más páginas que "${l2.titulo}"`):
console.log(`El libro "${l2.titulo}" tiene más páginas que "${l1.titulo}"`);