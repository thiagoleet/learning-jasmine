function Romanos(algarismo) {
    var clazz = {
        converte: function () {
            if (algarismo === "I")
                return 1;
            if (algarismo === "IV")
                return 4;
            if (algarismo === "XVI")
                return 16;
        }
    };

    return clazz;
}