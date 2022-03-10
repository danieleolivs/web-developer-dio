class ContaBancaria {
    constructor (agecia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação negada"
        }

        this._saldo = this._saldo - valor;
        return this._saldo
    }

    depositar(valor){

    }
}

class ContaCorrente extends ContaBancaria{
    constructor (agecia, numero, saldo, cartaoCredito){
        super(agecia, numero, saldo)
        this.tipo = 'corrente'
        this.cartaoCredito =  cartaoCredito

    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

class ContaPoupanca  extends ContaBancaria{
    constructor (agecia, numero, saldo){
        super(agecia, numero, saldo)
        this.tipo = 'poupança'

    }

}

class ContaUniversitaria  extends ContaBancaria{
    constructor (agecia, numero, saldo){
        super(agecia, numero, saldo)
        this.tipo = 'universitaria'

    }

    sacar(valor){
        if(valor>500){
            return "Operação negada"
        }

        this._saldo = this.saldo - valor
    }

}