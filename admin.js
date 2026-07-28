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

  const { error } = await supabase
    .from("minisplits")
    .insert([{
      nombre,
      marca,
      toneladas,
      voltaje,
      precio,
      descripcion
    }]);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Minisplit guardado correctamente");

  document.getElementById("nombre").value = "";
  document.getElementById("marca").value = "";
  document.getElementById("toneladas").value = "";
  document.getElementById("voltaje").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("descripcion").value = "";
}
