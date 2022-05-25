const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    res.json(await controller.getSaleById(req.params.id));
});

router.get('/metodoCompra/:tipoCompra', async (req, res) => {
    res.json(await controller.getVentasPorTipo(req.params.tipoCompra));
});

router.get('/customer/:email', async (req,res) => {
    res.json(await controller.getVentasPorEmail(req.params.email));
});

router.get('/insatisfechos/satis', async (req, res) => {
    res.json(await controller.getInsatisfechos());
});

router.get('/localizacion/:lugar', async (req, res) => {
    const total = await controller.getLocalizacion(req.params.lugar);
    res.json(`El total de ventas de ${req.params.lugar} es de ${total}`);
})

module.exports = router;