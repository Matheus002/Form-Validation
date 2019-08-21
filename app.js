document.getElementById('nome').addEventListener('blur', validarNome);
document.getElementById('cep').addEventListener('blur', validarCep);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('telefone').addEventListener('blur', validarTelefone);


function validarNome() {
  const nome = document.getElementById('nome');
  const re = /^[a-zA-Z]{2,10}$/;

  if(!re.test(nome.value)){
    nome.classList.add('is-invalid');
  }else {
    nome.classList.remove('is-invalid');
  }

}

function validarCep() {
  const cep = document.getElementById('cep');
  const re = /^[0-9]{5}?/;

  if(!re.test(cep.value)){
    cep.classList.add('is-invalid');
  }else {
    cep.classList.remove('is-invalid');
  }

}

function validarEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  }else {
    email.classList.remove('is-invalid');
  }

}

function validarTelefone() {
  const fone = document.getElementById('telefone');
  const re = /^[0-9]{8,9}$/;  //Desconsiderando a adição do DDD
  //const re = /^\(?\d{2})\)?[-]?\d{4,5}?\d{4}$/;

  if(!re.test(fone.value)){
    fone.classList.add('is-invalid');
  }else {
    fone.classList.remove('is-invalid');
  }

}