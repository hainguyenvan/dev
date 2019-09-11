# Note 101
* Elasticsearch hỗ trợ extend từ một mapping đã tồn tại
* Chúng ta có thể cấu hình để elasticsearch xóa một doc sau một khoảng thời gian nào đó

# Data Types
* String
* Number: Cả int, float, long
* Date: 2013-03-  15T10:02:26.231+1:00
* Boolean

# String
* Elastic sẽ term các word và nó sẽ loại bỏ các từ không có ý nghĩa, và index nó thành ký tự thường
    * Late Night with Elasticsearch: term các từ Late, Night, Elasticsearch

# Number
* Int, Long cho các kiểu dữ liệu số nguyên
* Float, Double cho các kiểu dữ liệu số  thực

# Date
* Elasticsearch hỗ  trợ kiểu dữ liệu dạng date, chúng ta có thể format lại định dạng dữ liệu date

# Boolean
* Elasticsearch hỗ trợ boolean với true/false
    * T: true, F: false
    * 0: Là giá trị false, còn giá trị khác là true

# Arrays
* Là một tập các filed

# ID
* Elasticsearch sẽ auto sinh ra một một id or bạn có thể tự cấu hình id cho nó