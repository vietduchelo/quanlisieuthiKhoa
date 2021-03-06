var genericService = require('./../service/generic.service');
var statisticsController = require('./../service/statistics.service');
module.exports = {
    getAllStatistics: getAllStatistics,
    createStatistics: createStatistics,
    updateStatistics: updateStatistics,
    getStatisticsById: getStatisticsById,
    deleteStatisticsById: deleteStatisticsById
}
var Model = 'statistics'
function getAllStatistics(req, res) {
    genericService.getAll(Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function getStatisticsById(req, res) {
    genericService.getById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function deleteStatisticsById(req, res) {
    genericService.deleteById(req.id, Model).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function createStatistics() {
    statisticsController.createStatistics(req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}
function updateStatistics() {
    statisticsController.updateStatistics(req.params.id,req.body).then((Response) => {
        res.send(Response);
    }).catch((err) => {
        res.send(err);
    });
}