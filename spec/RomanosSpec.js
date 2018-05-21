describe("Romanos", function () {

    describe("Conversão", function () {
        it("deve converter I em 1", function () {
            var convertido = Romanos("I").converte();
            expect(convertido).toEqual(1);
        });

        it("deve converter IV em 4", function () {
            var convertido = Romanos("IV").converte();
            expect(convertido).toEqual(4);

        });

        it("deve converter XVI em 16", function () {
            var convertido = Romanos("XVI").converte();
            expect(convertido).toEqual(16);

        });
    });
});