const botonEncriptar = document.getElementById('botonEncriptar');
const botonDesencriptar = document.getElementById('botonDesencriptar')
const encriptados = document.getElementById('encriptados')
const botonCopiar = document.getElementById('botonCopiar')

var listEncriptada = []

function encriptadorTexto(){ 
    var texto = document.getElementById('entradaTexto').value
    var listTexto = texto.split("");
    for(var i = 0; i < texto.length;i++){
        switch (listTexto[i]){
            case ("a"):
                listTexto[i] = "ai"
                break;
            case ("e"):
                listTexto[i] = "enter"
                break;
            case ("i"):
                listTexto[i] = "imes"
                break;
            case ("o"):
                listTexto[i] = "ober"
                break;
            case ("u"):
                listTexto[i] = "ufat"
                break;
        }
    }
    
    encriptados.innerHTML = '';
    var textoEncriptado = document.createTextNode(listTexto.join(''))
    encriptados.appendChild(textoEncriptado)
    listEncriptada = listTexto;
    console.log(listEncriptada);
    return listTexto
}

function desencriptadorTexto(){
    var texto = listEncriptada;
    for(var i = 0; i < texto.length;i++){
        switch (texto[i]){
            case ("ai"):
                texto[i] = "a"
                break;
            case ("enter"):
                texto[i] = "e"
                break;
            case ("imes"):
                texto[i] = "i"
                break;
            case ("ober"):
                texto[i] = "o"
                break;
            case ("ufat"):
                texto[i] = "u"
                break;
        }
    }
    encriptados.innerHTML = '';
    var textoDesencriptado = document.createTextNode(texto.join(''))
    encriptados.appendChild(textoDesencriptado)
    listEncriptada = []
    console.log(listEncriptada);
    return texto
}

function copiarEncriptado() {
     /* Copy the text inside the text field */

    navigator.clipboard.writeText(encriptados.innerHTML);
  
    /* Alert the copied text */
    alert("Copied the text: " + encriptados.innerHTML);
  }


botonEncriptar.onclick = encriptadorTexto
botonDesencriptar.onclick = desencriptadorTexto
botonCopiar.onclick = copiarEncriptado