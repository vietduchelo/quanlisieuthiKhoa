var genericService = require('./../service/generic.service');
var productController = require('./../service/product.service');
module.exports = {
    getAllProduct: getAllProduct,
    createProduct: createProduct,
    updateProduct: updateProduct,
    getProductById: getProductById,
    deleteProductById: deleteProductById
}
var Model = 'products'
function getAllProduct(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function getProductById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteProductById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createProduct(req,res) {
    productController.createProduct(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateProduct(req,res) {
    productController.updateProduct(req.params.id,req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}