import chai from 'chai';
import { NumerosFelizes } from './numerosfelizes';

const expect = chai.expect;
const numerosFelizes = new NumerosFelizes();

describe('Quando o número é feliz', () => {
    it('o numero 1 deve ser feliz', function () {
        let numero = 1;
        let isFeliz = numerosFelizes.isFeliz(numero);
        expect(isFeliz).to.equal(true);
    });

    it('deve somar o quadrado de cada digito do numero informado e retornar true se for feliz', function () {
        let numero = 10;
        let isFeliz = numerosFelizes.isFeliz(numero);
        expect(isFeliz).to.equal(true);
    });

    it('deve ir somando o quadrado de cada digíto do resultado da soma de 130', function () {
        let numero = 130;
        let isFeliz = numerosFelizes.isFeliz(numero);
        expect(isFeliz).to.equal(true);
    });


});
describe('Quando o número é infeliz', () => {
    it('retornar do numero infeliz', function () {
        let numero = 9;
        let isFeliz = numerosFelizes.isFeliz(numero);
        expect(isFeliz).to.equal(false);
    });
});

