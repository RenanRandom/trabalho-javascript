const assert = require('assert');
const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('Testes do Serviço de Pagamento', function() {
    it('Deve registrar um pagamento maior que 100 e categorizar como "cara"', function() {
        const servicoDePagamento = new ServicoDePagamento();
        
        // Executa o método pagar com os dados do exemplo do professor
        servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);
        
        // Pega o resultado do último pagamento
        const ultimo = servicoDePagamento.consultarUltimoPagamento();
        
        // Verifica se as propriedades batem exatamente com o esperado pelo print do TCD
        assert.strictEqual(ultimo.codigoBarras, '0987-7656-3475');
        assert.strictEqual(ultimo.empresa, 'Samar');
        assert.strictEqual(ultimo.valor, 156.87);
        assert.strictEqual(ultimo.categoria, 'cara');
    });

    it('Deve registrar um pagamento menor ou igual a 100 e categorizar como "padrão"', function() {
        const servicoDePagamento = new ServicoDePagamento();
        
        servicoDePagamento.pagar('1111-2222-3333', 'Loja X', 50.00);
        const ultimo = servicoDePagamento.consultarUltimoPagamento();
        
        assert.strictEqual(ultimo.categoria, 'padrão');
    });
});