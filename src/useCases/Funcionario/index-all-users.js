const Funcionario = require('../../entities/Funcionario');

module.exports = {
    async index(request, response) {
        try {
            const funcionario = await Funcionario.find();

            return response.json(funcionario);
        } catch (err) {
            return response.json({ erro: err.message });
        };
    }
}