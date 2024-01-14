const UserService = require('../services/UserService');

module.exports = {

    buscarTodos: async(req, res) => {
        
        let json = {error:'', result:[]};

        let usuarios = await UserService.buscarTodos();

        for(let i in usuarios){
            json.result.push({
                codigo: usuarios[i].codigo,
                descricao: usuarios[i].nome
            });
        }

        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let usuario = await UserService.buscarUm(codigo);

        if(usuario){
            json.result = usuario;
        }

        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let cpf = req.body.cpf;

        if(nome && cpf){
            let UsuarioCodigo = await UserService.inserir(nome, cpf);
            json.result = {
                codigo: UsuarioCodigo,
                nome,
                cpf
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let cpf = req.body.cpf;

        if(codigo && nome && cpf ){
            await UserService.alterar(codigo, nome, cpf);
            json.result = {
                codigo,
                nome,
                cpf
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    excluir: async(req, res)=> {
        let json = {error:'', result:{}};
    
        await UserService.excluir(req.params.codigo);

        res.json(json);
    }
}