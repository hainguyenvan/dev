var connect = require('../connect');
var Sequelize = require('sequelize');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

class UserModel {
    constructor() {
        this.sequelize = connect.sequelize;
        this.model = this.sequelize.define('User', {
            id: {
                field: 'id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            age: {
                field: 'age',
                type: Sequelize.INTEGER
            },
            firstName: {
                field: 'firstName',
                type: Sequelize.STRING
            },
            lastName: {
                field: 'lastName',
                type: Sequelize.STRING
            }
        }, {
                tableName: 'User'
            });
    }

    insert(data) {
        return new Promise((fulfill, reject) => {
            this.model.create(data)
                .then(result => {
                    fulfill(result);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    getByID(id) {
        return new Promise((fulfill, reject) => {
            this.model.findOne({
                id: id
            })
                .then(user => {
                    fulfill(user);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    getAll() {
        return new Promise((fulfill, reject) => {
            this.model.findAll()
                .then(dataList => {
                    fulfill(dataList);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }
}

module.exports = new UserModel();