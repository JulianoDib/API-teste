const express = require("express");
const router = express.Router()

//Listar
router.get("/", (req,res) =>{
    res.json({id: 1, nome:"Luis"});
});

//Buscar por id
router.get("/:id", (req,res) =>{
    const id = req.params.id;
    res.json({id, nome:"Usuario exemplo"});
});

//Criar novo usuario

router.post("/", (req,res) =>{
    const novoUser = req.body;
    res.status(201).json({
        mensagem: "Usuario criado com sucesso",
        user: novoUser
    });
});

//Atualizar usuario por id
router.put("/:id", (req,res) =>{
    const id = req.params.id;
    const dadosAtualizados = req.body;
    res.json({
        mensagem: `Usuario ${id} foi atualizado`,
        dados: dadosAtualizados
    });
});

//Deletar usuario
router.delete("/:id", (req,res) =>{
    try {
        const id = req.params.id;
        res.json({mensagem: "Usuario deletado com sucesso"});
    } catch (err) {
        res.json({error: err});
    }
});

module.exports = router;