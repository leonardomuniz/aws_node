const Funcionario = require('../../entities/Funcionario');

module.exports = {
    async show(request, response) {
        try {
            const funcionario = await Funcionario.findOne({ _id: request.params._id });

            return response.json(funcionario);
        } catch (err) {
            return response.json({ erro: err.message });
        };
    },

}