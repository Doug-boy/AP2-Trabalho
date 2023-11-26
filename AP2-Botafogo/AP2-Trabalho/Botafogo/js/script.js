sessionStorage.setItem("senha",hex_md5("SENHA"))


async function fetchURL(url){

    const carregando = document.getElementById("loading")

    carregando.style.display = 'flex'

    const resposta = await fetch(url)

    dados = await resposta.json();

    carregando.style.display = 'none'

    return dados

}


function cria_jogadores(url){
        
    const divJogadores = document.getElementById("jogadores")
    divJogadores.innerHTML = " "

    fetchURL(url).then(
    (resposta) => {
        for (const atleta of resposta) {

            const card = cria_card(atleta);
    
            divJogadores.appendChild(card);
        }
    }
    )
    

}


const sair_sessao = () => {
    localStorage.setItem("logado",false)
    check_logado()
}

function opcoes(){

    const content = document.getElementById("content");
    content.innerHTML = " ";

    const header = document.createElement('div')
    header.className = "header"


    const logo = document.createElement('div')
    logo.id = "logo"
    const img = document.createElement('img')
    img.src = "img/Escudo_Botafogo.png"

    const titulo = document.createElement('h2')
    titulo.id = "titulo"
    titulo.textContent= "Atletas Botafogo 2023-2"

    logo.appendChild(img)
    logo.appendChild(titulo)
    header.appendChild(logo)

    const btn_sair = document.createElement('button')
    btn_sair.textContent = "sair"
    btn_sair.onclick = sair_sessao;
    header.appendChild(btn_sair);



    const botoes = document.createElement('div')
    botoes.className = "botoes"

    const botao1 = document.createElement('button')
    botao1.textContent = " elenco masculino"
    botao1.onclick = () => {
    cria_jogadores("https://botafogo-atletas.mange.li/masculino")
    }

    botoes.appendChild(botao1);

    const botao2 = document.createElement('button')
    botao2.textContent = "elenco feminino"
    botao2.onclick = () => {
        cria_jogadores("https://botafogo-atletas.mange.li/feminino")
    }

    botoes.appendChild(botao2);

    const botao3 = document.createElement('button')
    botao3.textContent = "elenco completo"
    botao3.onclick = () => {
        cria_jogadores("https://botafogo-atletas.mange.li/all")
    }

    botoes.appendChild(botao3);

    content.appendChild(header)
    content.appendChild(botoes)

}




function login(){

    const content = document.getElementById("content");
    const div_login = document.createElement("div")
    div_login.id = "div-login"
    content.innerHTML = " ";

    const pagina_login = document.createElement("div")
    pagina_login.id = "pagina-login" 


    const div_textos = document.createElement("div")
    div_textos.id = "div-textos"
    const texto1 = document.createElement('h2')
    texto1.textContent = "Atletas do Botafogo em 2023-2"

    div_textos.appendChild(texto1)

    const senha = document.createElement("div")
    senha.id = "login" 
    const inputSenha = document.createElement('input')
    inputSenha.type = "password"
    inputSenha.id = "input-senha"
    inputSenha.placeholder = "Senha:"
    
    const botaoEntrar = document.createElement('button')
    botaoEntrar.id = "btn-entrar"
    botaoEntrar.textContent = "Entrar"
    senha.appendChild(inputSenha)
    senha.appendChild(botaoEntrar)

    botaoEntrar.addEventListener('click', () => {check_senha(inputSenha.value)})
    inputSenha.value = ""

    const dica = document.createElement('h3')
    dica.textContent = "Efetue login com a senha: SENHA"
    
    const img = document.createElement('img')
    img.src = "img/Escudo_Botafogo.png"
    img.width = 100

    div_login.appendChild(img)
    div_login.appendChild(senha)
    div_login.appendChild(dica)


    pagina_login.appendChild(div_textos)
    pagina_login.appendChild(div_login)


    content.appendChild(pagina_login)

}

check_logado()

function check_logado(){
    if (localStorage.getItem('logado') === "true"){

        opcoes()
    } else {

        const divJogadores = document.getElementById("jogadores")
        divJogadores.innerHTML = " "
        login()
    }
}

function check_senha(senha){

    const senhaPadrao = sessionStorage.getItem("senha")
    const senhaPassada = hex_md5(senha)

    if (senhaPadrao === senhaPassada){
        localStorage.setItem("logado",true)
        opcoes();

    } else {
        localStorage.setItem("logado",false)
        alert("senha passada é incorreta");
    }

}
