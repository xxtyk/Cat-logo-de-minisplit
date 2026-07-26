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
  const foto = document.getElementById("foto").value;

  const { error } = await supabase
    .from("Catálogo minisplit")
    .insert([{
      nombre: nombre,
      marca: marca,
      toneladas: toneladas,
      voltaje: voltaje,
      precio: precio,
      descripcion: descripcion,
      foto1: foto
    }]);

  if (error) {
    alert(error.message);
    return;
  }

  document.getElementById("nombre").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("toneladas").value = "";
  document.getElementById("voltaje").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("descripcion").value = "";
  document.getElementById("foto").value = "";

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

        <img src="${item.foto1 || ""}" width="100%">

        <h2>${item.nombre}</h2>

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
