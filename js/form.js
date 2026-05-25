document
.getElementById("formContato")
.addEventListener("submit", function(event){

    event.preventDefault();

    let nome =
    document.getElementById("nome").value;

    let empresa =
    document.getElementById("empresa").value;

    let email =
    document.getElementById("email").value;

    let telefone =
    document.getElementById("telefone").value;

    let documento =
    document.getElementById("documento").value;

    if(email == "" || telefone == "" || documento == ""){

        alert("Preencha email, telefone e CPF/CNPJ!");

        return;
    }

    document
    .getElementById("mensagem-retorno")
    .innerHTML =

    "Solicitação enviada com sucesso, " +
    nome +
    "! Nossa equipe da Zanettini Barossi retornará em breve.";

});