const Funcionario = require('../../entities/Funcionario');

module.exports = {
    async create(request, response) {
        try {
            const { nome, idade, cargo } = request.body;

            const funcionario_existe = await Funcionario.findOne({ nome: nome });

            if (!funcionario_existe) {
                const funcionario = await Funcionario.create({ nome, idade, cargo });

                return response.json(funcionario);
            } else {
                return response.json({ message: "Este funcionario(a) já foi cadastrado(a)!" });
            };

        } catch (err) {
            return response.json({ erro: err.message });
        };
    },
}