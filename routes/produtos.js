const express = require('express')
const router = express.Router();

router.get('/produtos', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Lista todos os produtos'
    });
});

router.post('/produtos', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um novo produto'
    });
});

router.get('/produtos/:id', (req, res, next) => {
    const id = req.params.id

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Você passou o id especial.',
            id: id
        })
    } else {
        res.status(200).send({
            mensagem: 'Você passou um id.'
        })
    }

})

router.patch('/produtos/:id', (req, res, next) => {
    res.status(201).send({
        mensagem:'Atualiza um produto'
    })
})

router.delete('/produtos/:id', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Remove um produto'
    })
})

module.exports = router;