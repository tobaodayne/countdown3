// Đặt ngày đếm ngược
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

const x = setInterval(function() {
    // Lấy thời gian hiện tại
    const now = new Date().getTime();

    // Tính khoảng cách thời gian giữa bây giờ và ngày đếm ngược
    const distance = countdownDate - now;

    // Tính toán thời gian cho ngày, giờ, phút và giây
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả trong các thẻ span
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Nếu thời gian đếm ngược kết thúc, hiển thị một thông báo
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "HẾT GIỜ";
    }
}, 1000);
