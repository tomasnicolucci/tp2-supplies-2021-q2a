const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getVentasPorTipo(tipoCompra){
    return sales.getVentasPorTipo(tipoCompra);
}  

async function getVentasPorEmail(email){
    return sales.getVentasPorEmail(email);
}

async function getInsatisfechos(){
    const ventas = await sales.getAllSales();
    const insatisfechos = ventas.filter(venta => venta.customer.satisfaction < 3);
    return insatisfechos;
}

async function getLocalizacion(lugar){
    const salesTotal = await sales.getAllSales();
    const ventasPorLocalizacion = salesTotal.filter(venta => venta.storeLocation == lugar);
    let total = 0;
    ventasPorLocalizacion.forEach(venta => {
        venta.items.forEach(item => total += (item.price * item.quantity))
    });
    return total;
}

module.exports = {getSales, getSaleById, getVentasPorTipo, getVentasPorEmail, getInsatisfechos, getLocalizacion};