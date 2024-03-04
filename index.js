document.getElementById("surveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn form gửi đi để xử lý dữ liệu

    // Thu thập dữ liệu từ form
    var formData = {
        fullName: document.getElementById("fullName").value,
        dob: document.getElementById("dob").value,
        idNumber: document.getElementById("idNumber").value,
        address: document.getElementById("address").value
    };

    // Hiển thị dữ liệu đã thu thập (có thể thay đổi thành phần khác tùy thuộc vào yêu cầu)
    console.log("Thông tin khảo sát:", formData);

    // Sau đó, bạn có thể thực hiện các hành động khác như lưu trữ dữ liệu hoặc chuyển hướng người dùng đến các câu hỏi khảo sát tiếp theo
    window.location.href = "./survey.html";
});
