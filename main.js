document.addEventListener('DOMContentLoaded', function() {

  const image = document.querySelector('#image');
  const nome = document.querySelector('#nome');
  const sobrenome = document.querySelector('#sobrenome');
  const repositorio = document.querySelector('#repositorio');
  const seguidores = document.querySelector('#seguidores');
  const seguindo= document.querySelector('#seguindo');
  const link = document.querySelector('#link');

  fetch('https://api.github.com/users/eliamiguel/')
  .then( function(respost){
    respost.json();
  })
  .then(function(json){
  image.src =json.avatar_url;
  nome = json.name;
  sobrenome =json.login;
  repositorio =json.public_repos;
  seguidores = json.followers;
  seguindo = json.following;
  link.href=json.html_url;
})
})