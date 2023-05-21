function solo_caracteres_normales() {
    const textarea =document.getElementById('encriptador')
    const regex = /^[a-zA-Z0-9]+([a-zA-Z0-9\s]*)$/;
    
    if (!regex.test(textarea.value)) {
      textarea.value = textarea.value.replace(/[^a-zA-Z0-9\s]/g, "");
    }
  }
  



  
  function encriptar() {
    const processed_text_p=document.querySelector(".__message p");
    
    const processed_text_btn=document.querySelector(".__message button");
    const messageh1=document.querySelector(".__message h1");
    const textarea = document.getElementById("encriptador").value
    const message=document.querySelector(".__message__inprocess");
    const messageimg=document.querySelector("#__message__imag");
    const processed_text=document.querySelector(".__message");
    

    const reemplazos = {
      e: 'enter',
      i: 'imes',
      a: 'ai',
      o: 'cber',
      u: 'ufat'
    };
    let encriptar = textarea;
    
    for (let caracter in reemplazos) {

      const regex = new RegExp(caracter, 'g');
       encriptar = encriptar.replace(regex, reemplazos[caracter]);
      
      
    }
    

    
    processed_text_p.textContent=encriptar
    processed_text_p.classList.add("enc")
    
    processed_text_btn.style.display = "block";
    processed_text.style.display = "block";
    messageh1.style.display = "none";
    messageimg.style.display = "none";
    message.style.display = "none";
    return encriptar;
  }

  function desencriptar() {
    const processed_text_p = document.querySelector(".__message p");
    
    const processed_text_btn=document.querySelector(".__message button");
    const messageh1 = document.querySelector(".__message h1");
    const textarea = document.getElementById("encriptador").value;
    const message = document.querySelector(".__message__inprocess");
    const messageimg = document.querySelector("#__message__imag");
    const processed_text = document.querySelector(".__message");

    const reemplazos = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'cber': 'o',
      'ufat': 'u'
    };
  
    let desencriptar = textarea;
    

    const clavesOrdenadas = Object.keys(reemplazos).sort((a, b) => b.length - a.length);
  
    for (let clave of clavesOrdenadas) {
      const regex = new RegExp(clave, 'g');  
      desencriptar = desencriptar.replace(regex, reemplazos[clave]);
      
      
    }
    

    
    processed_text_p.textContent = desencriptar;
    
    
    processed_text_p.classList.add("enc")
    
    processed_text_btn.style.display = "block";
    processed_text.style.display = "block";
    messageh1.style.display = "none";
    messageimg.style.display = "none";
    message.style.display = "none";
    return desencriptar;
}

  function validarMinusculas(texto) {
    var patron = /^[a-z]+$/;
    return patron.test(texto);
    
  }
  window.onload = function() {
  document.getElementById('encriptador').addEventListener('keypress', function(event) {
    var charCode = typeof event.which == "number" ? event.which : event.keyCode;
    if (!isLowercaseLetter(charCode)) {
        event.preventDefault();
        }
    });
  };
  function isLowercaseLetter(charCode) {
    return charCode >= 97 && charCode <= 122;
}

function copiar() {
  const paraCopiar = document.querySelector(".__message p").innerText;

  navigator.clipboard.writeText(paraCopiar)
    .then(() => {
      
    })
    .catch(err => {
      console.error('Error al copiar texto: ', err);
    });
}