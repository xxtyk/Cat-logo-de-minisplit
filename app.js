let minisplits = [];

function agregar(){

const nombre = document.getElementById("nombre").value;
const marca = document.getElementById("marca").value;
const toneladas = document.getElementById("toneladas").value;
const voltaje = document.getElementById("voltaje").value;
const precio = document.getElementById("precio").value;
const descripcion = document.getElementById("descripcion").value;
const foto = document.getElementById("foto").value;

minisplits.push({
nombre,
marca,
toneladas,
voltaje,
precio,
descripcion,
foto
});

mostrar();

document.getElementById("nombre").value="";
document.getElementById("marca").value="";
document.getElementById("toneladas").value="";
document.getElementById("voltaje").value="";
document.getElementById("precio").value="";
document.getElementById("descripcion").value="";
document.getElementById("foto").value="";
}

function mostrar(){

const contenedor=document.getElementById("productos");

contenedor.innerHTML="";

minisplits.forEach(item=>{

contenedor.innerHTML+=`
<div class="card">

<img src="${item.foto}" width="100%">

<h2>${item.nombre}</h2>

<p><b>Marca:</b> ${item.marca}</p>

<p><b>Toneladas:</b> ${item.toneladas}</p>

<p><b>Voltaje:</b> ${item.voltaje}</p>

<p>${item.descripcion}</p>

<h3>${item.precio}</h3>

</div>
`;

});

}
