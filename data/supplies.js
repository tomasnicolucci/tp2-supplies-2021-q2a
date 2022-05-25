const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;

async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new objectId(id)});
    return sale;                
}

async function getVentasPorTipo(tipoCompra){
    const sales = await getAllSales();
    const salesFiltradas = sales.filter(ventas => ventas.purchaseMethod === tipoCompra);
    return salesFiltradas;
}

async function getVentasPorEmail(email){
    const sales = await getAllSales();
    const salesFiltradas = sales.filter(venta => venta.customer.email === email);
    return salesFiltradas;
}

// async function getInsatisfechos(){
//     const sales = await getAllSales();
//     const insatisfechos = sales.filter(venta => venta.customer.satisfaction < 3);
//     return insatisfechos;
// }

module.exports = {getAllSales, getSaleById, getVentasPorTipo, getVentasPorEmail};