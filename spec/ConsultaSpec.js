describe("Consulta", function () {

    var guilherme;
    var procedimentosComuns = [];
    var procedimentosEspeciais = [];
    var procedimentosMisto = [];

    beforeEach(function () {
        guilherme = new PacienteBuilder()
            .constroi();

        var quantosProcedimentos = 5; // Informe aqui quantos procedimentos quer medir
        for (var i = 0; i < quantosProcedimentos; i++) {
            procedimentosComuns.push("procedimento-comum");
        }
        procedimentosEspeciais = ["raio-x", "gesso"];
        procedimentosMisto = ["procedimento-comum", "raio-x", "procedimento-comum", "gesso"];

    });

    describe("Consultas do tipo retorno", function () {
        it("não deve cobrar nada se for um retorno", function () {
            var consulta = new Consulta(guilherme, [], true, true);
            expect(consulta.preco()).toEqual(0);
        });
    });

    describe("Consultas com procedimentos", function () {
        it("deve cobrar 25 por cada procedimento comum", function () {
            var procedimentos = procedimentosComuns;
            var consulta = new Consulta(guilherme, procedimentos, false, false);

            expect(consulta.preco()).toEqual(25 * procedimentos.length);
        });

        it("deve cobrar preço específico dependendo do procedimento", function () {
            var consulta = new Consulta(guilherme, procedimentosMisto, false, false);

            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

    describe("Consultas particulares", function () {
        it("deve cobrar em dobro procedimentos comuns caso seja particular", function () {
            var procedimentos = procedimentosComuns;
            var consulta = new Consulta(guilherme, procedimentos, true, false);

            expect(consulta.preco()).toEqual((25 * 2) * procedimentos.length);
        });

        it("deve cobrar em dobro procedimentos especiais caso seja particular", function () {
            var consulta = new Consulta(guilherme, procedimentosEspeciais, true, false);

            expect(consulta.preco()).toEqual((55 * 2) + (32 * 2));
        });
    });

});