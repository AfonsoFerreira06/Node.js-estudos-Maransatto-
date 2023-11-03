const express = require('express')
const router = express.Router();

router.get('/pedidos', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Lista todos os pedidos'
    });
});

router.post('/pedidos', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere um novo pedido'
    });
});

router.get('/pedidos/:id', (req, res, next) => {
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

router.patch('/pedidos/:id', (req, res, next) => {
    res.status(201).send({
        mensagem:'Atualiza um pedido'
    })
})

router.delete('/pedidos/:id', (req, res, next)=>{
    res.status(201).send({
        mensagem:'Remove um pedido'
    })
})

module.exports = router;