const sobre = document.querySelector("#about");
const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(
      `https://api.github.com/users/larissaangioni`
    );

    const perfil = await dadosPerfil.json();

    let conteudo = `
            <img class="img_about"
          src="${perfil.avatar_url}"
          alt="Foto do Perfil - ${perfil.name}"
          width="350px"
        />

        <article id="sobre_texto">
          <h1 class="center">Sobre mim</h1>

          <p class="center">
            ${perfil.bio}
          </p>

          <div id="sobre_github" class="github_container">
            <div>
            <a class="botao" target="_blank" href="${perfil.html_url}"
              >Github</a
            ></div>
            <div><p>${perfil.followers} Seguidores</p></div>
            <div></div><p>${perfil.public_repos} Repositórios</p></div>
          
        </div>
        </article>
    `;

    sobre.innerHTML = conteudo;
    
  } catch (error) {
    console.log(error);
  }
}

getApiGithub();


formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const campoNome = document.querySelector("#name");
  const txtNome = document.querySelector("#txtNome")

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O nome deve conter no mínimo 3 caracteres.";
    campoNome.focus();
    return;
  }else{
    txtNome.innerHTML = '';
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail");

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido.";
    campoEmail.focus();
    return;
  }else{
    txtEmail.innerHTML = '';
  }

  const campoSubject = document.querySelector("#subject");
  const txtSubject = document.querySelector("#txtSubject");

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = "O assunto deve ter no mínimo 5 caracteres.";
    campoSubject.focus();
    return;
  }else{
    txtSubject.innerHTML = "";
  }

  formulario.submit();
});