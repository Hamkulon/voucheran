async function cekVoucher() {
    let kode = document.getElementById("voucherInput").value;
    let hasil = document.getElementById("hasil");

    // Ambil daftar voucher dari file JSON
    let response = await fetch("voucher.json");
    let data = await response.json();

    if (!data[kode]) {
        hasil.innerText = "Kode voucher tidak valid!";
        return;
    }

    let linkM3U8 = "https://bit.ly/3X0xy4j"; // Semua kode mengarah ke link ini

    // Buat link intent untuk langsung membuka OTT Navigator
    let ottIntent = `intent://play/?url=${encodeURIComponent(linkM3U8)}#Intent;package=studio.scillarium.ottnavigator;end;`;

    window.location.href = ottIntent; // Buka aplikasi OTT Navigator langsung
}