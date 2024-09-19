# Contador de Letra 'A' em Strings

Este projeto é uma aplicação simples em JavaScript que verifica a existência da letra 'a' (maiúscula ou minúscula) em uma string e informa a quantidade de vezes que ela aparece.

## Como funciona

1. O programa recebe uma string como entrada (definida no código ou através de qualquer outro método de entrada).
2. Ele utiliza uma expressão regular para identificar todas as ocorrências da letra 'a' na string, ignorando se está em maiúsculas ou minúsculas.
3. Em seguida, o programa exibe no console o número de vezes que a letra 'a' aparece ou uma mensagem informando que ela não está presente.

## Exemplo de uso

```javascript
// Defina aqui a string que deseja verificar
const string = "Aprendendo a programar em JavaScript com atenção";

// Exibe o resultado no console
console.log(verificarLetraA(string));
