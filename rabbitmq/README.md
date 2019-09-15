# Cấu hình RabbitMQ
* persistent-true: các queue sẽ không bị mất nếu RabbitMQ server bị restart
* durable-true: đảm bảo chỉ có một queue duy nhất được tạo với tên là duy nhất
* chúng ta có thể cấu hình để redefine lại task nếu quá trình đó fail
* channel.prefetch(1): tại một thời điểm chỉ nhận một task từ  queue, sau khi done thì mới nhận thêm task mới từ queue
* Router: Điều hướng queue theo exchange
* Topic: Chấp nhận các exchange theo dạng regex
