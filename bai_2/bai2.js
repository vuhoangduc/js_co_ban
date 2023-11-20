// Tạo bảng cửu chương và thêm vào trang web
function createMultiplicationTable() {
    // Lấy thẻ table từ HTML
    var table = document.getElementById("multiplicationTable");

    // Tạo bảng cửu chương từ 2 đến 9
    for (var i = 2; i <= 9; i++) {
        // Tạo một hàng trong bảng
        var row = table.insertRow();

        // Tạo ô trong hàng để hiển thị kết quả
        var cell = row.insertCell(0);

        // Đặt nội dung cho ô
        cell.textContent = ""; // Đặt trước để tránh hiển thị nội dung cũ

        // Tạo bảng cửu chương từ 1 đến 10 cho mỗi số
        for (var j = 1; j <= 10; j++) {
            // Tính kết quả và thêm vào ô
            var result = i * j;
            cell.textContent += i + " x " + j + " = " + result + "\t";
        }
    }
}

// Gọi hàm để tạo bảng cửu chương khi trang web được tải
createMultiplicationTable();