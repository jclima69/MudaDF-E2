// Máscaras automáticas para CPF, telefone e CEP
document.addEventListener("DOMContentLoaded", function () {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    const range = document.getElementById("disponibilidade");
    const output = document.getElementById("disponibilidade-output");

    if (cpf) {
        cpf.addEventListener("input", () => {
            cpf.value = cpf.value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        });
    }

    if (telefone) {
        telefone.addEventListener("input", () => {
            telefone.value = telefone.value
                .replace(/\D/g, "")
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d{4,5})(\d{4})$/, "$1-$2");
        });
    }

    if (cep) {
        cep.addEventListener("input", () => {
            cep.value = cep.value
                .replace(/\D/g, "")
                .replace(/(\d{5})(\d{3})$/, "$1-$2");
        });
    }

    if (range && output) {
    // Atualiza ao carregar a página
    output.textContent = `${range.value} horas`;

    // Atualiza em tempo real conforme o usuário desliza
    range.addEventListener("input", () => {
        output.textContent = `${range.value} horas`;
    });
}
});
