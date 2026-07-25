alert("Catálogo de Minisplits iniciado");
const minisplits = [
{
nombre:"Mirage 1 Tonelada",
precio:"$4,600",
foto:"https://via.placeholder.com/600x400?text=Mirage"
}
];

const contenedor=document.getElementById("productos");

minisplits.forEach(item=>{
contenedor.innerHTML+=`
<div class="card">
<img src="${item.foto}">
<h2>${item.nombre}</h2>
<p class="precio">${item.precio}</p>
<a class="boton" href="#">Pedir</a>
</div>
`;
});
