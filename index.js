function incriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo_mensaje');
    let parrafo = document.getElementById('parrafo');
    let imagen = document.getElementById('munheco')

    let texto_cifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
      
      if (texto.length !=0){
        document.getElementById('texto').value = texto_cifrado
        tituloMensaje.textContent = 'texto encriptado exitosamente';
        parrafo.textContent= "";
        imagen.src = "./image/Codificacion.jpg";
      }
      else{
        imagen.src = "./image/inspeccion.jpg";
        tituloMensaje.textContent = "Ningun ,emsaje se  a encontrado"
        parrafo.textContent = "Ingresa el texto que desa encriptar o desencriptar"
        alert("debes de ingresar un texto")
      }

}

function Desincriptar() {
    let texto = document.getElementById('texto').value;
    let tituloMensaje = document.getElementById('titulo_mensaje');
    let parrafo = document.getElementById('parrafo');
    let imagen = document.getElementById('munheco')

    let texto_cifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");

      if (texto.length !=0){
        document.getElementById('texto').value = texto_cifrado
        tituloMensaje.textContent = 'texto desencriptado exitosamente';
        parrafo.textContent= "";
        imagen.src = "./image/desincritar.jpg";
      }
      else{
        imagen.src = "./image/inspeccion.jpg";
        tituloMensaje.textContent = "Ningun ,emsaje se  a encontrado"
        parrafo.textContent = "Ingresa el texto que desa encriptar o desencriptar"
        alert("debes de ingresar un texto")
      }
      
}