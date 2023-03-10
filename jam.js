function JamBan() {
  const tglK = document.getElementById("tgl");
  const waktuK = document.getElementById("jam");
  const jadwalK = document.getElementById("jadwal");
  const MKK = document.getElementById("MK");
  const dosenK = document.getElementById("dosen");
  const ruangK = document.getElementById("ruang");
  const harihari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const d = new Date();
  let menit = d.getMinutes();
  let jam = d.getHours();
  let detik = d.getSeconds();
  let hari = d.getDay();
  let tanggal = d.getDate();
  let bulan = d.getMonth();
  let tahun = d.getFullYear();

  let leadingDetik = 0;
  let leadingMenit = 0;
  let leadingJam = 0;
  let hariF = harihari[hari];
  let bulanF = namaBulan[bulan];

  if (detik < 10) {
    leadingDetik = "0" + detik.toString();
  } else {
    leadingDetik = detik;
  }
  if (menit < 10) {
    leadingMenit = "0" + menit.toString();
  } else {
    leadingMenit = menit;
  }
  if (jam < 10) {
    leadingJam = "0" + jam.toString();
  } else {
    leadingJam = jam;
  }

  if ((hari = 2)) {
    while (8 <= jam <= 10) {}
  }

  tglK.innerText = hariF + ", " + tanggal + " " + bulanF + " " + tahun;

  waktuK.innerText =
    "Pukul " + leadingJam + ":" + leadingMenit + ":" + leadingDetik + " WIB";
}
setInterval(JamBan, 10);
