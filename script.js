const wrapper = document.querySelector(".wrapper");
qrInput = document.querySelector(".form input");
generateBtn = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerHTML = "QR Code Okunuyor..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Yeni QR Kodunu Görüntüle"
    });
});

qrInput.addEventListener("keyup" , () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})