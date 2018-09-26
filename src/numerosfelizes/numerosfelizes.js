export class NumerosFelizes {

    isFeliz(value) {
        let soma = value;
        let lista = [];
        do {
            lista.push(soma);
            soma = somaResultadoDoQuadradoDeCadaDigitoEm(soma);
        } while ((soma !== 1) && !contains(lista, soma));

        return soma === 1;
    }

};

function somaResultadoDoQuadradoDeCadaDigitoEm(numero) {
    let soma = 0;
    const valueAsString = numero.toString();

    for (let i = 0; i < valueAsString.length; i++) {
        soma += Math.pow(valueAsString.charAt(i), 2);
    }

    return soma;
}

function contains(lista, soma) {
    return lista.indexOf(soma) !== -1;
}