# Redis - Sets
* Sets là kiểu dữ liệu dạng mảng, nhưng các phần tử trong sets không được trùng nhau. Set hỗ trợ lưu trữ tối đa 2^32 -1 phần tử.

### Redis Sets Commands
* sadd key member1 [member2] - add thêm một hoặc nhiều phần tử vào set
* scard key - lấy về số lượng members trong set
* sdiff key1 [key2] - lấy ra các phần tử khác nhau của set
* sdiffstore destination key1 [key2] - lấy ra các phần tử khác nhau của set và save nó vào một set khác
* sinter key1 [key2] - lấy ra những phần tử thuộc cả 2 set
* sinterstore destination key1 [key2] - lấy ra những phần tử thuộc cả 2 set và save nó vào một set khác
* sismember key member - xác định xem một member có trong set hay không
* smembers key - lấy ra tất cả các members trong set
* smove source destination member - chuyển member từ set này sang set khác
* spop key - xóa ngấu nhiên một member trong set
* srandmember  key [count] - lấy ra một hoặc nhiều members từ trong một set
* sunion key1 [key2] - gộp dữ liệu cuả 2 set lại với nhau
* sunionstore destination key1 [key2] - gộp dữ liệu của 2 set và save nó vào một set khác