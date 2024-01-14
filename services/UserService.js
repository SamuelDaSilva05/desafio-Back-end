const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuarios', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM usuarios WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, cpf) => {
        return new Promise((aceito, rejeitado)=>{

            db.query('INSERT INTO usuarios (nome, cpf) VALUES (?, ?)',    [nome, cpf], 
            (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results.insertCodigo);
            }
        );
    });
},

     alterar: (codigo, nome, cpf) => {
    return new Promise((aceito, rejeitado)=>{

        db.query('UPDATE usuarios SET nome = ?, cpf = ? WHERE codigo = ?',    [nome, cpf, codigo], 
        (error, results)=>{
            if(error) { rejeitado(error); return; }
            aceito(results);
        }
    );
});
},

    excluir: (codigo) => {
    return new Promise((aceito, rejeitado)=>{

        db.query('DELETE FROM usuarios WHERE codigo = ?',[codigo], (error, results)=>{
            if(error) { rejeitado(error); return; }
            aceito(results);
        });
    });
}
};