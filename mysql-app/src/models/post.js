var connect = require('../connect');
var Sequelize = require('sequelize');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array)
    }
}

class PostModel {
    constructor() {
        this.sequelize = connect.sequelize;
        this.model = this.sequelize.define('Post', {
            id: {
                field: 'id',
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            date: {
                field: 'date',
                type: Sequelize.STRING
            },
            contents: {
                field: 'contents',
                type: Sequelize.STRING
            },
            userID: {
                field: 'userID',
                type: Sequelize.INTEGER
            }
        }, {
                tableName: 'Post'
            });
    }

    insert(data) {
        return new Promise((fulfill, reject) => {
            this.model.create(data)
                .then(data => {
                    fulfill(data);
                })
                .catch(err => {
                    reject(err);
                })
        })
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

module.exports = new PostModel();