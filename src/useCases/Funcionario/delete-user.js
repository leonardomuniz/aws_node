const Funcionario = require('../../entities/Funcionario');

module.exports = {
    async delete(request, response) {
        try {
            const { _id } = request.params;

            const funcionario_existe = await Funcionario.findOne({ _id });

            if(!funcionario_existe) {
                return response.json({ message: "Este funcionario(a) ainda não foi cadastrado(a)!" });
            } else {
                const funcionario = await Funcionario.findByIdAndDelete({ _id: request.params._id });

                return response.json(funcionario);
            }

        } catch (err) {
            return response.json({ erro: err.message });
        };
    },
};