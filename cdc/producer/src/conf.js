const Config = {
    HTTP_PORT: 3003,

    // uat db
    // DB_HOST: '203.162.13.59',
    // DB_NAME: 'mem_uat',
    // DB_PROTOCOL: 'mysql',
    // DB_PORT: '8083',
    // DB_USERNAME: 'root',
    // DB_PASSWORD: 'pwd',

    // dev db
    DB_HOST: '172.104.167.189',
    DB_NAME: 'mem',
    DB_PROTOCOL: 'mysql',
    DB_PORT: '9908',
    DB_USERNAME: 'root',
    DB_PASSWORD: 'pwd',

    // table
    SHORT_NAME_AUDIT: 'ADI',
    SHORT_NAME_EQUIPMENT_CATEGORY: 'EQC',
}

module.exports = Config;