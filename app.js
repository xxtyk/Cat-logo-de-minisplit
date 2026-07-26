const supabase = window.supabase.createClient(
  "https://fsadwndjjmpiuoqoahle.supabase.co",
  "sb_publishable_AHjOSgFVDaaXaWl6dR_icA_2lQfhgLu"
);

async function agregar() {

  const nombre = document.getElementById("nombre").value;
  const marca = document.getElementById("marca").value;
  const toneladas = document.getElementById("toneladas").value;
  const voltaje = document.getElementById("voltaje").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  const archivo1 = document.getElementById("foto1").files[0];
const archivo2 = document.getElementById("foto2").files[0];
const archivo3 = document.getElementById("foto3").files[0];
  let foto1 = "";
let foto2 = "";
let foto3 = "";

if (archivo1) {
  const nombre = Date.now() + "_1_" + archivo1.name;

  await supabase.storage
    .from("minisplits")
    .upload(nombre, archivo1);

  foto1 = supabase.storage
    .from("minisplits")
    .getPublicUrl(nombre).data.publicUrl;
}

if (archivo2) {
  const nombre = Date.now() + "_2_" + archivo2.name;

  await supabase.storage
    .from("minisplits")
    .upload(nombre, archivo2);

  foto2 = supabase.storage
    .from("minisplits")
    .getPublicUrl(nombre).data.publicUrl;
}

if (archivo3) {
  const nombre = Date.now() + "_3_" + archivo3.name;

  await supabase.storage
    .from("minisplits")
    .upload(nombre, archivo3);

  foto3 = supabase.storage
    .from("minisplits")
    .getPublicUrl(nombre).data.publicUrl;
}

  const { error } = await supabase
    .from("Catálogo minisplit")
    
.insert([{
  nombre: nombre,
  marca: marca,
  toneladas: toneladas,
  voltaje: voltaje,
  precio: precio,
  descripcion: descripcion,
  foto1: foto1,
  foto2: foto2,
  foto3: foto3
}]);
  document.getElementById("nombre").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("voltaje").value = "";
document.getElementById("precio").value = "";
  document.getElementById("foto1").value = "";
document.getElementById("foto2").value = "";
document.getElementById("foto3").value = "";
  document.getElementById("descripcion").value = "";
  

  cargar();
}

async function cargar() {

  const { data, error } = await supabase
    .from("Catálogo minisplit")
    .select("*");

  if (error) {
    alert(error.message);
    return;
  }

  const contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";

  data.forEach(item => {

    contenedor.innerHTML += `
      <div class="card">

      

      
${item.foto1 ? `<img src="${item.foto1}" width="100%">` : ""}
${item.foto2 ? `<img src="${item.foto2}" width="100%">` : ""}
${item.foto3 ? `<img src="${item.foto3}" width="100%">` : ""}
        <p><b>Marca:</b> ${item.marca}</p>

        <p><b>Toneladas:</b> ${item.toneladas}</p>

        <p><b>Voltaje:</b> ${item.voltaje}</p>

        <p>${item.descripcion}</p>

        <h3>$${item.precio}</h3>

      </div>
    `;

  });

}

cargar();
