const NodeRSA = require('node-rsa');
const fs = require('fs');
const ursa = require('ursa');

const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkQIDTyildZtNvfQmfr3c
ADBLlxUNmmXFPLCG5HGNIDPZNxqudwbPhzb5d+S9PcNAsYR3GTEkgpIr4d7KEtwA
yc9l/L9PISy20c0cpk8Og2TZDtWGuK9OJtgcy00FL0SZoRWe07KG2kpTPrbPkdyK
IUMlYtwwQaFVKKHCSb5oF4CIjX8LiZrFPnUwYd1bfR2VhbvU7gxNl0vjlTEJ5dmc
ZQw4V47ouWv2uotOvU80v+8QYLF407opccpX0NHKL3+acbi57pl4E72FKanITgd7
KS6+dDIlHWf6Y+bo3d4XgnQytT3R60ILOe8LimLpXxibtaiEAA1qjTs/IrGgJclQ
bQIDAQAB
-----END PUBLIC KEY-----`;

const privateKey = `
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCRAgNPKKV1m029
9CZ+vdwAMEuXFQ2aZcU8sIbkcY0gM9k3Gq53Bs+HNvl35L09w0CxhHcZMSSCkivh
3soS3ADJz2X8v08hLLbRzRymTw6DZNkO1Ya4r04m2BzLTQUvRJmhFZ7TsobaSlM+
ts+R3IohQyVi3DBBoVUoocJJvmgXgIiNfwuJmsU+dTBh3Vt9HZWFu9TuDE2XS+OV
MQnl2ZxlDDhXjui5a/a6i069TzS/7xBgsXjTuilxylfQ0covf5pxuLnumXgTvYUp
qchOB3spLr50MiUdZ/pj5ujd3heCdDK1PdHrQgs57wuKYulfGJu1qIQADWqNOz8i
saAlyVBtAgMBAAECggEAPVjKqZyak2zGsQwvlQMhpfrIn/xKKv3POeO8zby0ZeFJ
jiR9luGMvrmlRPHClfSa0/8km8XMmmjYo9ArUVs+AiL6FLmi8ngGSDAsZLehfjkW
E06Glm+j8o8Pb3sALIUrMZkB/rHSl1tGaIvSuPTCg1vy3yYkTD/C1VPJ7ITfaMFW
coadJkL72Hz1oU1yECQiYz/X36Fg0g5zb9QlcxM4DyqHZMdde96oEqISs+f0GuoE
rR7P4tYZktv6JimPodsWcDBuo6zB/nOEdFGFltLETiCcVua6SaQo06c4iZnqJQDp
szzBPK3S9d1QNTX02R2esZfkzGYddPMkMbXaJuSIAQKBgQDRD0WAybi3sWqeYViB
l4OikB3NaTQi/cju8UkzvsToaZFKcGNnRkCghdQ1Hd4iiI+zDIRupXuri248dJag
xXAmUYsQKWoOMtbdgvXm0KOw21jb/91nWtKJXuw+9M7StzG3B2uF72oiScU/CAcs
ym6a1D/KMjidCD6lo8mlzeBlAQKBgQCxkQz8Sp65Lsf/bn655fzCDC5e+xLGUFE/
qq/Hdeho/JUu8rkRG3PWIR761uikIURe1SG15zQzxEsbw+d+CGc9gjoezzfRoVNb
vLu62thXAooYFd2MSP8oTOfKDYbSm40ZdGe5A8Yve5UNGZQPBfz5jn1LNLe87ULV
1gx8vxNPbQKBgCzxdIaoVx6edIZR9R3+/ZyQEOgc6slu96hulMccBubT8xkmqigE
kVYxDxrQLfYMl5/tW/cRelG5qtwyUEOFzoNeWmACFzuwMEL0qXqSde5KaYL6MZXL
j6Fal709Ec149qYbYUEs5As1AsN3LVuytS5x3LjSLRuNLzKa0HnllY0BAoGAHamh
hbPheAX8mwsWWG+3HaNzS6KdrEtWh1A4NRXZUVCAi2s4x0bSvv6hcj3cdy6ngUAR
dZW9/rfX5DeBwGge9wN+Og9bv8U3a6fHpJtScJaYAxYEAJ9hIJZYUkSYNS6PD6WG
fj3HKb93UsznEutpKzdGbv3Lg+AOvjIXu+8fhrECgYEAhQzyp4ZyqYgyo6UpElQW
GQIiLWazl2GHlw5mJGEnZXlvvqja7rYa5SqkhITd6MybLCth4a5xBVb2UiGx23/p
Rs54BSLLZpjgy+gTXMi1+DUsWxmmixmR23v105+GfgCxTI7ZAypsI33MIA9SMJlO
Nap+FjZmzcQHhf8MoSmfuik=
-----END PRIVATE KEY-----
`;

let key = ursa.createPrivateKey(privateKey);
crt = ursa.createPublicKey(publicKey);

console.log('Encrypt with Public');
msg = crt.encrypt("Everything is going to be 200 OK", 'utf8', 'base64');
console.log('encrypted', msg, '\n');

console.log('Decrypt with Private');
msg = key.decrypt(msg, 'base64', 'utf8');
console.log('decrypted', msg, '\n');



