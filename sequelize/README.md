# Sequelize

## 1. Cấu hình pool
* pool.max(mặc định 5): Số lượng connection pool max
* pool.min(mặc định 0): Số lượng connection pool min
* pool.idle(mặc định 10000ms): Tình bằng milliseconds, thời gian nghỉ tối đa của  connection trước khi nó bị đóng kết nối.
* pool.acquire(mặc định là 60000ms): Tính bằng milliseconds,thời gian tối đa mà pool kết nối đến db trước khi thông báo lỗi.
* pool.evict (mặc định 1000): Tính bằng milliseconds, khoảng thời gian trước khi pool bị đóng hẳn kết nối

## 2. Read replication
* Hỗ trợ ghi ở một server và đọc ở một server khác

## 3. Transaction
* Ex
```
const Connect = require('./connect');

const User1Model = require('./user1');
const User2Model = require('./user2');

async function main() {
    return new Promise(async (fulfill, reject) => {
        let transaction = await Connect.sequelize.transaction();
        await User1Model.model.create({
            name: "hainv1"
        }, {
            transaction
        });

        await User2Model.model.create({
            name: 'hainv2'
        }, {
            transaction
        });

        transaction.rollback();
        Connect.sequelize.close();
        fulfill(true);
    })

}

main();
```

# Ref
* http://docs.sequelizejs.com/

