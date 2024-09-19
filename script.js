// Função para verificar a existência da letra 'a' e contar sua ocorrência
function verificarLetraA(str) {
    // Convertendo a string para minúsculas e utilizando uma expressão regular para contar todas as ocorrências da letra 'a'
    const quantidadeA = (str.match(/a/gi) || []).length;

    // Verifica se a letra 'a' aparece na string
    if (quantidadeA > 0) {
        return `A letra 'a' aparece ${quantidadeA} vezes na string.`;
    } else {
        return `A letra 'a' não aparece na string.`;
    }
}

// Defina aqui a string que deseja verificar
const string = "Aprendendo a programar em JavaScript com atenção";

// Exibe o resultado no console
console.log(verificarLetraA(string));
