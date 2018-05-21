function PacienteBuilder() {
    var nome = "Guilherme";
    var idade = 28;
    var peso = 72;
    var altura = 1.80;

    var clazz = {
        constroi: function () {
            return Paciente(nome, idade, peso, altura);
        },

        comIdade(valor) {
            idade = valor;
            return this;
        },
        
        comPeso(valor) {
            peso = valor;
            return this;
        },
        
        comAltura(valor) {
            altura = valor;
            return this;
        },
        
        comNome(valor) {
            nome = valor;
            return this;
        }
    };

    return clazz;
}