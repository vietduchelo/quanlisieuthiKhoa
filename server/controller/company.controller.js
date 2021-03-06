var genericService = require('./../service/generic.service');
var companyController = require('./../service/company.service')
module.exports = {
    getAllCompany: getAllCompany,
    createCompany: createCompany,
    updateCompany: updateCompany,
    getCompanyById: getCompanyById,
    deleteCompanyById: deleteCompanyById
}
var Model = 'companys'
function getAllCompany(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function getCompanyById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteCompanyById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createCompany(req,res) {
    companyController.createCompany(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateCompany() {
    companyController.updateCompany(req.params.id,req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}