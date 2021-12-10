const Funcionario = require('../../entities/Funcionario');

module.exports = {
    async update(request, response) {
        try {
            const { _id } = request.params;

            const funcionario_existe = await Funcionario.findOne({ _id });

            if (!funcionario_existe) {
                return response.json({ message: "Este funcionario(a) ainda não foi cadastrado(a)!" });
            } else {
                const funcionario = await Funcionario.findOneAndUpdate({ _id: request.params._id }, { $set: request.body }, { runValidators: true });

                return response.json(funcionario);
            }

        } catch (err) {
            return response.json({ erro: err.message });
        };
    },
};