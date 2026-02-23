function hopLeDiem(diem) {
    return diem >= 0 && diem <= 10 && (diem * 100) % 25 === 0;
}

function xepLoai() {
    let toan = parseFloat(document.getElementById("toan").value);
    let van = parseFloat(document.getElementById("van").value);
    let anh = parseFloat(document.getElementById("anh").value);
    let ketqua = document.getElementById("ketqua");

    // Kiểm tra rỗng
    if (isNaN(toan) || isNaN(van) || isNaN(anh)) {
        ketqua.innerHTML = "⚠ Vui lòng nhập đầy đủ điểm!";
        ketqua.style.color = "red";
        return;
    }

    // Kiểm tra hợp lệ 0 → 10 và bội số 0.25
    if (!hopLeDiem(toan) || !hopLeDiem(van) || !hopLeDiem(anh)) {
        ketqua.innerHTML = "⚠ Điểm phải từ 0–10 và cách nhau 0.25";
        ketqua.style.color = "red";
        return;
    }

    let dtb = (toan + van + anh) / 3;
    let loai = "";

    if (dtb >= 8) loai = "Giỏi";
    else if (dtb >= 6.5) loai = "Khá";
    else if (dtb >= 5) loai = "Trung bình";
    else loai = "Yếu";

    ketqua.innerHTML =
        "Điểm trung bình: " + dtb.toFixed(2) +
        "<br>Xếp loại: " + loai;

    ketqua.style.color = "green";
}