var connect = require('../connect');
var Sequelize = require('sequelize');

var Config = require('../conf');
var Constant = require('../const');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

class AuditModel {
    constructor() {
        this.sequelize = connect.sequelize;
        this.model = this.sequelize.define('Audit', {
            id: {
                field: 'id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            pk: {
                field: 'pk',
                type: Sequelize.STRING
            },
            userPK: {
                field: 'userPK',
                type: Sequelize.STRING
            },
            recordType: {
                field: 'recordType',
                type: Sequelize.STRING
            },
            recordPK: {
                field: 'recordPK',
                type: Sequelize.STRING
            },
            action: {
                field: 'action',
                type: Sequelize.STRING
            },
            value: {
                field: 'value',
                type: Sequelize.STRING
            },
            timeCreated: {
                field: 'timeCreated',
                type: Sequelize.INTEGER
            },
            timeModified: {
                field: 'timeModified',
                type: Sequelize.INTEGER
            }
        }, {
                tableName: 'Audit'
            });
    }

    generatePK() {
        return new Promise((fulfill, reject) => {
            this.model.max('id')
                .then(maxID => {
                    maxID = maxID.toString() == 'NaN' ? 0 : maxID + 1;
                    let pk = Constant.SHORT_NAME_AUDIT + '_' + maxID;
                    fulfill(pk);
                }).catch(err => {
                    reject(err);
                })
        });
    }

    insert(data) {
        return new Promise((fulfill, reject) => {
            this.generatePK()
                .then(pk => {
                    data.pk = pk; //null
                    data.timeCreated = new Date().getTime();
                    data.timeModified = new Date().getTime();
                    this.model.create(data)
                        .then(result => {
                            fulfill(result);
                        })
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = new AuditModel();