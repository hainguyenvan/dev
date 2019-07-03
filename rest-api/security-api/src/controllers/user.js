const JWT = require('jsonwebtoken');
const NodeRSA = require('node-rsa');

const Config = require('../config/config');
const {
    decodeToke
} = require('../utils/utils');

class UserController {
    constructor() {}

    login(req, res) {
        let email = req.body.email;

        let payloadToken = {
            email: email
        }

        // generate token with jwt, expires: 1 days
        let token = JWT.sign(payloadToken, Config.SECRET_JWT, {
            expiresIn: Config.EXPIRES_IN_TOKEN
        });
        let auth = {
            token: token,
            userInfo: {
                email: email,
                publicKey: `-----BEGIN PUBLIC KEY-----
                MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvbWFv93DXj7egvs/RBwn
                NxzmfAytTUWd0SP4w2/8YNipmY/z1//cpUe2ByPamYXYRP/JoWPk+rnmDOZTuC65
                7Dyevde6v/IoUph7PKjgvxwRo7WE9lR+r6ldn+Q6P2PP1AyUCebZyOPOAFqCS3Ih
                10/Lh6qJXULiSezD00mq1M4p5GP2HGMZQUWskb2QxUgYhFf7gvB1976A+wosn4IA
                C0P+SBF24ew4eGHEThSaeYl+lQ9ieVmzvcHvUSGkcPlz+sjoQhsJ3mvx+FQx71La
                7pchNn/PfEboFEf5sTiWHnx6cEEdkWT6VaSokNG3kSCBDxnxSDCPV7czNuv6VNuy
                pwIDAQAB
                -----END PUBLIC KEY-----`
            }
        }
        res.send({
            status: 200,
            msg: `successful.`,
            data: auth
        });
    }

    getData(req, res) {
        let hashData = req.headers.hashdata;
        console.log('hash data: ', hashData);
        let key = new NodeRSA(Config.PRIVATE_KEY);
        const decrypted = key.decrypt(hashData, 'utf8');
        console.log('decrypted: ', decrypted);
        res.send({
            status: 200,
            msg: `successful.`,
            data: {}
        });
    }
}

module.exports = new UserController();