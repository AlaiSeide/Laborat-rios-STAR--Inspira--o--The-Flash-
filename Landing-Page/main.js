const registros = [
    { nome: "João", email: "joao@example.com" },
    { nome: "Maria", email: "maria@example.com" }
    // Adicione mais registros aqui...
];

function verificarRegistro() {
    const emailVerificar = document.getElementById("email").value;
    const resultadoElemento = document.getElementById("resultado");

    if (emailVerificar) {
        const registroEncontrado = registros.find(registro => registro.email === emailVerificar);

        if (registroEncontrado) {
            resultadoElemento.innerHTML = `Usuário ${registroEncontrado.nome} está registrado.`;
        } else {
            resultadoElemento.innerHTML = "Usuário não encontrado.";
        }
    }
}

