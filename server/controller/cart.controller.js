var genericService = require('./../service/generic.service');
var cartController = require('./../service/cart.service');
module.exports = {
    getAllCart: getAllCart,
    createCart: createCart,
    updateCart: updateCart,
    getCartById: getCartById,
    deleteCartById: deleteCartById
}
var Model = 'carts'
function getAllCart(req, res) {
    if(req.query){
        genericService.getAllByValue(req.query,Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    }else{
        genericService.getAll(Model).then((Response) => {
            res.send(Response);
        }).catch((err) => {
            res.send(err);
        })
    }
   
}
function getCartById(req, res) {
    genericService.getById(req.params.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteCartById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createCart(req,res) {
    cartController.createCart(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateCart(req,res) {
    cartController.updateCart(req.params.id,req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}