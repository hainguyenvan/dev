var Constant = require('./const');

class ThirdParty {
    constructor() { }

    getFullRecordType(firstPK) {
        return new Promise((fulfill, reject) => {
            if (firstPK == undefined || firstPK == null) {
                fulfill('');
            }
            switch (firstPK) {
                case Constant.SHORT_NAME_EQUIPMENT_CATEGORY:
                    fulfill(Constant.FULL_NAME_EQUIPMENT_CATEGORY);
                    break;
                default:
                    fulfill(firstPK);
                    break;

            }
        })
    }
}

module.exports = new ThirdParty();