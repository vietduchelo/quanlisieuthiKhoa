var genericService = require('./../service/generic.service');
var imgController = require('./../service/image.service')
module.exports = {
    getAllImg: getAllImg,
    createImg: createImg,
    updateImg: updateImg,
    getImgById: getImgById,
    deleteImgById: deleteImgById
}
var Model = 'images'
function getAllImg(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function getImgById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function deleteImgById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function createImg(req,res) {
    imgController.createImg(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}
function updateImg() {
    imgController.updateImg(req.params.id,req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    })
}