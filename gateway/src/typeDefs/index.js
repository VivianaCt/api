const authTypeDefs = require('./auth_type_defs');
const productTypeDefs = require('./product_type_defs');
const trolleyTypeDefs = require('./trolley_type_defs');
const facturaTypeDefs = require('./factura_type_defs');

const schemasArrays = [productTypeDefs, authTypeDefs, trolleyTypeDefs,facturaTypeDefs];

module.exports = schemasArrays;

