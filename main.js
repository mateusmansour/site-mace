function cal() {

    var a = parseInt(document.forms['form']['a'].value);
    var a2 = parseInt(document.forms['form']['a2'].value);
    var r = parseInt(document.forms['form']['r'].value);
    var r2 = parseInt(document.forms['form']['r2'].value);
    var textThing = document.querySelector(".result");
    textThing.innerHTML = "";
    if (a == "") {
    alert("Todos os valores precisam ser preenchidos.");
    return false;
    } else if (a2 == "") {
    alert("Todos os valores precisam ser preenchidos.");
    return false;
    } else if (r == "") {
    alert("Todos os valores precisam ser preenchidos.");
    return false;
    } else if (r2 == "") {
    alert("Todos os valores precisam ser preenchidos.");
    return false;
    }
    
    var r3 = (r2 - a2);
    var r4 = (r3 * r);
    var result = (r4 + a);
    
    if (result !== null) {
    textThing.appendChild(document.createTextNode(`resultado: ${result}`))
    }
    return forms['form'];
    }
    function how() {
        alert("Insira os dados corretamente. O primeiro valor é o 'a', o segundo é sua posição, seja a1, a2, ou qualquer outro número. O terceiro valor é a razão.");    
    }