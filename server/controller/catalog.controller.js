var genericService = require('./../service/generic.service');
var catalogDetail = require('./../service/catalog.service');
module.exports = {
    getAllCatalog: getAllCatalog,
    createCatalog: createCatalog,
    updateCatalog: updateCatalog,
    getCatalogById: getCatalogById,
    deleteCatalogById: deleteCatalogById
}
var Model = 'catalogs'
function getAllCatalog(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function getCatalogById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteCatalogById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createCatalog(req,res) {
    catalogDetail.createCatalog( Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateCatalog(req,res) {
    catalogDetail.updateCatalog(req.params.id,Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}