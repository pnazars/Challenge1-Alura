//para que podamos llamar los elemento que nos interesan del HTML

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText= texto;
    return;
}

function ingresotexto() {
    let regex = /^[a-z\s]+$/; // Permite solo letras minúsculas y espacios
    let textoUsuario = document.getElementById('textousuario');
    let valortextousuario = textoUsuario.value;

    if (!regex.test(valortextousuario)) {
        console.error("El texto contiene mayúsculas o caracteres no permitidos.");
        asignarTextoElemento('h2','El texto contiene mayúsculas o caracteres no permitidos.')
        document.getElementById('mensajeerror').style.display = '';
        document.getElementById('muñeco').style.display = '';
        document.getElementById('titulotraducido').style.display = 'none';
        return false;
    } else{


    console.log(valortextousuario);
    console.log(typeof(valortextousuario));

    // Reemplazo de vocales utilizando una función de reemplazo
    let textoModificado = valortextousuario.replace(/[aeiouáéíóú]/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'a': return 'ai';
            case 'á': return 'aí';
            case 'e': return 'enter';
            case 'é': return 'entér';
            case 'i': return 'imes';
            case 'í': return 'ímés';
            case 'o': return 'ober';
            case 'ó': return 'óbér';
            case 'u': return 'ufat';
            case 'ú': return 'ufát';
            default: return match;
        }
    });

    console.log(textoModificado);

    // Actualizar el textarea con el texto modificado
    textoUsuario.value = valortextousuario;

    // Actualizar el párrafo con el texto modificado
    asignarTextoElemento('p', textoModificado);
    document.getElementById('mensajeerror').style.display = 'none';
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('titulotraducido').style.display = '';
    document.querySelector('.titulotraducido').className = 'textotraducido';
}
    
}


function ingresotextoencriptado() {
    let regex = /^[a-z\s]+$/; // Permite solo letras minúsculas y espacios
    let textoUsuario = document.getElementById('textousuario');
    let valortextousuario = textoUsuario.value;

    if (!regex.test(valortextousuario)) {
        console.error("El texto contiene mayúsculas o caracteres no permitidos.");
        asignarTextoElemento('h2','El texto contiene mayúsculas o caracteres no permitidos.')
        document.getElementById('mensajeerror').style.display = '';
        document.getElementById('muñeco').style.display = '';
        document.getElementById('titulotraducido').style.display = 'none';
        return false;
    } else{


    console.log(valortextousuario);
    console.log(typeof(valortextousuario));

    // Reemplazo de vocales utilizando una función de reemplazo
    let textoModificado = valortextousuario.replace(/ai|aí|enter|entér|imes|ímés|ober|óbér|ufat|úfát/gi, function(match) {
        switch (match.toLowerCase()) {
            case 'ai': return 'a';
            case 'aí': return 'a';
            case 'enter': return 'e';
            case 'entér': return 'é';
            case 'imes': return 'i';
            case 'ímés': return 'í';
            case 'ober': return 'o';
            case 'óbér': return 'ó';
            case 'ufat': return 'u';
            case 'úfát': return 'ú';
            default: return match;
        }
    });

    console.log(textoModificado);

    // Actualizar el textarea con el texto modificado
    textoUsuario.value = valortextousuario;

    // Actualizar el párrafo con el texto modificado
    asignarTextoElemento('p', textoModificado);
    document.getElementById('mensajeerror').style.display = 'none';
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('titulotraducido').style.display = '';
    document.querySelector('.titulotraducido').className = 'textotraducido';
}
    
}