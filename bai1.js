
// bài 1 
// Yêu cầu người dùng nhập toán hạng và toán tử
var a = prompt("Nhập toán hạng a: ");
var b = prompt("Nhập toán hạng b: ");
var o = prompt("Nhập toán tử: ");

// Chuyển đổi chuỗi nhập từ prompt sang số
a = parseFloat(a);
b = parseFloat(b);

// Phân tích toán tử và thực hiện phép tính
switch (o) {
    case '+':
        var kq = a + b;
        alert("Tổng: " + kq);
        break;
    case '-':
        var kq = a - b;
        alert("Hiệu: " + kq);
        break;
    case '*':
        var kq = a * b;
        alert("Tích: " + kq);
        break;
    case '/':
        if (b !== 0) {
            var kq = a / b;
            alert("Thương: " + kq);
        } else {
            alert("Không thể chia cho 0.");
        }
        break;
    default:
        alert(o + " không phải là toán tử hợp lệ.");
        break;
}



