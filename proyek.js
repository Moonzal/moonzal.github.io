const tglK = document.getElementById("tgl");
const hariK = document.getElementById("hari");
const jamK = document.getElementById("jam");
const menitK = document.getElementById("menit");
const detikK = document.getElementById("detik");

const jadwalK = document.getElementById("jadwal");
const MKK = document.getElementById("MK");
const dosenK = document.getElementById("dosen");
const ruangK = document.getElementById("ruang");

const jadwalNextK = document.getElementById("jadwal-next");
const MKNextK = document.getElementById("MK-next");
const dosenNextK = document.getElementById("dosen-next");
const ruangNextK = document.getElementById("ruang-next");

const haris = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
const bulans = [
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
const listMK = {
  2: {
    0: {
      mulai: {
        j: "08",
        m: "00",
      },
      selesai: {
        j: "10",
        m: "00",
      },
      MK: "Web Programming 2",
      dosen: "Mujito, S.Kom., M.Kom.",
      ruang: "Ruang 3.5",
    },
    1: {
      mulai: {
        j: "10",
        m: "00",
      },
      selesai: {
        j: "13",
        m: "00",
      },
      MK: "ISTIRAHAT",
    },
    2: {
      mulai: {
        j: "13",
        m: "00",
      },
      selesai: {
        j: "15",
        m: "00",
      },
      MK: "Pengantar Grafik Komputer & Olah Citra",
      dosen: "Pujianto, S.Kom., M.Kom.",
      ruang: "Ruang 3.5",
    },
  },
  3: {
    0: {
      mulai: {
        j: "10",
        m: "00",
      },
      selesai: {
        j: "12",
        m: "00",
      },
      MK: "Electronic Commerce (E-Commerce)",
      dosen: "Ika Arthalia Wulandari, S.Kom., M.Kom.",
      ruang: "Ruang 2.2",
    },
    1: {
      mulai: {
        j: "12",
        m: "00",
      },
      selesai: {
        j: "13",
        m: "00",
      },
      MK: "ISTIRAHAT",
    },
    2: {
      mulai: {
        j: "13",
        m: "00",
      },
      selesai: {
        j: "14",
        m: "40",
      },
      MK: "Manajemen Pemasaran",
      dosen: "Guna Yanti K.S. Siregar, S.Kom., M.T.I",
      ruang: "Ruang 2.2",
    },
    3: {
      mulai: {
        j: "14",
        m: "40",
      },
      selesai: {
        j: "15",
        m: "00",
      },
      MK: "KOSONG",
    },
    4: {
      mulai: {
        j: "15",
        m: "00",
      },
      selesai: {
        j: "17",
        m: "00",
      },
      MK: "Jaringan Komputer",
      dosen: "Pujianto, S.Kom., M.Kom.",
      ruang: "Lab 3",
    },
  },
  4: {
    0: {
      mulai: {
        j: "10",
        m: "00",
      },
      selesai: {
        j: "11",
        m: "40",
      },
      MK: "AIK 4",
      dosen: "Dr. Kuliyatun, M.Pd.I",
      ruang: "Ruang 2.2",
    },
  },
  5: {
    0: {
      mulai: {
        j: "08",
        m: "00",
      },
      selesai: {
        j: "10",
        m: "00",
      },
      MK: "Sistem Administrator (Linux)",
      dosen: "Mujito, S.Kom., M.Kom.",
      ruang: "Lab 3",
    },
    1: {
      mulai: {
        j: "10",
        m: "00",
      },
      selesai: {
        j: "12",
        m: "00",
      },
      MK: "Pemrograman Aplikasi",
      dosen: "Sudarmaji, S.Kom., M.MKom.",
      ruang: "Lab 3",
    },
  },
};
let jam = 0;
let menit = 0;
let detik = 0;
function updateJadwal() {
  const d = new Date();
  // const d = new Date(2023, 2, 14, 13, 0, 04, 0);
  let tahun = d.getFullYear();
  let bulan = bulans[d.getMonth()];
  let hari = haris[d.getDay()];
  let tanggal = d.getDate();
  jam = d.getHours();
  menit = d.getMinutes();
  detik = d.getSeconds();

  if (hari == "Minggu") {
    if (jam < listMK[2][0].mulai.j) {
      jadwalK.innerHTML = "Minggu Libur";
      hitungMundur(2, listMK[2][0].mulai.j, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    } else {
      jadwalK.innerHTML = "Minggu Libur";
      hitungMundur(1, 32, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    }
  } else if (hari == "Senin") {
    if (jam < listMK[2][0].mulai.j) {
      jadwalK.innerHTML = "Senin Libur";
      hitungMundur(1, listMK[2][0].mulai.j, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    } else {
      jadwalK.innerHTML = "Senin Libur";
      hitungMundur(0, 32, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    }
  } else if (hari == "Selasa") {
    if (jam < listMK[2][0].mulai.j) {
      jadwalK.innerHTML = "Pagi";
      hitungMundur(0, listMK[2][0].mulai.j, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    } else if (listMK[2][0].mulai.j <= jam && jam < listMK[2][0].selesai.j) {
      adaMK(listMK[2][0]);
      hitungMundur(0, listMK[2][1].mulai.j, listMK[2][1].mulai.m);
      jadwalNextK.innerHTML = "Istirahat";
    } else if (listMK[2][1].mulai.j <= jam && jam < listMK[2][1].selesai.j) {
      jadwalK.innerHTML = "Istirahat";
      hitungMundur(0, listMK[2][2].mulai.j, listMK[2][2].mulai.m);
      adaMKNext(listMK[2][2]);
    } else if (listMK[2][2].mulai.j <= jam && jam < listMK[2][2].selesai.j) {
      adaMK(listMK[2][2]);
      hitungMundur(0, listMK[2][2].selesai.j, listMK[2][2].selesai.m);
      jadwalNextK.innerHTML = "Pulang";
    } else {
      jadwalK.innerHTML = "Pulang";
      hitungMundur(0, 34, listMK[3][0].mulai.m);
      adaMKNext(listMK[3][0]);
    }
  } else if (hari == "Rabu") {
    if (jam < listMK[3][0].mulai.j) {
      jadwalK.innerHTML = "Pagi";
      hitungMundur(0, listMK[3][0].mulai.j, listMK[3][0].mulai.m);
      adaMKNext(listMK[3][0]);
    } else if (listMK[3][0].mulai.j <= jam && jam < listMK[3][0].selesai.j) {
      adaMK(listMK[3][0]);
      hitungMundur(0, listMK[3][1].mulai.j, listMK[3][1].mulai.m);
      jadwalNextK.innerHTML = "Istirahat";
    } else if (listMK[3][1].mulai.j <= jam && jam < listMK[3][1].selesai.j) {
      jadwalK.innerHTML = "Istirahat";
      hitungMundur(0, listMK[3][2].mulai.j, listMK[3][2].mulai.m);
      adaMKNext(listMK[3][2]);
    } else if (listMK[3][2].mulai.j == jam && menit < listMK[3][2].selesai.m) {
      adaMK(listMK[3][2]);
      hitungMundur(0, listMK[3][2].selesai.j, listMK[3][2].selesai.m);
      jadwalNextK.innerHTML = "Istirahat";
    } else if (listMK[3][2].mulai.j == jam && menit >= listMK[3][2].selesai.m) {
      adaMK(listMK[3][2]);
      hitungMundur(0, listMK[3][2].selesai.j - 1, 100);
      jadwalNextK.innerHTML = "Istirahat";
    } else if (
      listMK[3][2].selesai.j == jam &&
      menit < listMK[3][2].selesai.m
    ) {
      adaMK(listMK[3][2]);
      hitungMundur(0, listMK[3][2].selesai.j, listMK[3][2].selesai.m);
      jadwalNextK.innerHTML = "Istirahat";
    } else if (listMK[3][3].mulai.j <= jam && menit >= listMK[3][3].mulai.m) {
      jadwalK.innerHTML = "Istirahat";
      hitungMundur(0, listMK[3][4].mulai.j, listMK[3][4].mulai.m);
      adaMKNext(listMK[3][4]);
    } else if (listMK[3][4].mulai.j <= jam && jam < listMK[3][4].selesai.j) {
      adaMK(listMK[3][4]);
      hitungMundur(0, listMK[3][4].selesai.j, listMK[3][4].selesai.m);
      jadwalNextK.innerHTML = "Pulang";
    } else {
      jadwalK.innerHTML = "Pulang";
      hitungMundur(0, 34, listMK[4][0].mulai.m);
      adaMKNext(listMK[4][0]);
    }
  } else if (hari == "Kamis") {
    if (jam < listMK[4][0].mulai.j) {
      jadwalK.innerHTML = "Pagi";
      hitungMundur(0, listMK[4][0].mulai.j, listMK[4][0].mulai.m);
      adaMKNext(listMK[4][0]);
    } else if (listMK[4][0].mulai.j == jam && menit < listMK[4][0].selesai.m) {
      adaMK(listMK[4][0]);
      hitungMundur(0, listMK[4][0].selesai.j, listMK[4][0].selesai.m);
      jadwalNextK.innerHTML = "Pulang";
    } else if (listMK[4][0].mulai.j == jam && menit >= listMK[4][0].selesai.m) {
      adaMK(listMK[4][0]);
      hitungMundur(0, listMK[4][0].selesai.j - 1, 100);
      jadwalNextK.innerHTML = "Pulang";
    } else if (
      listMK[4][0].selesai.j == jam &&
      menit < listMK[4][0].selesai.m
    ) {
      adaMK(listMK[4][0]);
      hitungMundur(0, listMK[4][0].selesai.j, listMK[4][0].selesai.m);
      jadwalNextK.innerHTML = "Pulang";
    } else {
      jadwalK.innerHTML = "Pulang";
      hitungMundur(0, 32, listMK[5][0].mulai.m);
      adaMKNext(listMK[5][0]);
    }
  } else if (hari == "Jum'at") {
    if (jam < listMK[5][0].mulai.j) {
      jadwalK.innerHTML = "Pagi";
      hitungMundur(0, listMK[5][0].mulai.j, listMK[5][0].mulai.m);
      adaMKNext(listMK[5][0]);
    } else if (listMK[5][0].mulai.j <= jam && jam < listMK[5][0].selesai.j) {
      adaMK(listMK[5][0]);
      hitungMundur(0, listMK[5][1].mulai.j, listMK[5][1].mulai.m);
      adaMKNext(listMK[5][1]);
    } else if (listMK[5][1].mulai.j <= jam && jam < listMK[5][1].selesai.j) {
      adaMK(listMK[5][1]);
      hitungMundur(0, listMK[5][1].selesai.j, listMK[5][1].selesai.m);
      jadwalNextK.innerHTML = "Pulang";
    } else {
      jadwalK.innerHTML = "Pulang";
      hitungMundur(3, 32, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    }
  } else if (hari == "Sabtu") {
    if (jam < listMK[2][0].mulai.j) {
      jadwalK.innerHTML = "Sabtu Libur";
      hitungMundur(3, listMK[2][0].mulai.j, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    } else {
      jadwalK.innerHTML = "Sabtu Libur";
      hitungMundur(2, 32, listMK[2][0].mulai.m);
      adaMKNext(listMK[2][0]);
    }
  }
}
setInterval(updateJadwal, 50);

function hitungMundur(aHari, aJam, aMenit) {
  let jam2 = 0;
  let menit2 = 0;
  if (aMenit == 0) {
    jam2 = aJam - jam - 1;
    menit2 = 60 - menit - 1;
  } else {
    jam2 = aJam - jam;
    menit2 = aMenit - menit - 1;
  }

  let detik2 = 60 - detik;

  let leadingDetik = 0;
  let leadingMenit = 0;
  let leadingJam = 0;

  if (detik2 < 10) {
    leadingDetik = "0" + detik2.toString();
  } else if (detik2 == 60) {
    leadingDetik = "00";
  } else {
    leadingDetik = detik2;
  }
  if (menit2 < 10) {
    leadingMenit = "0" + menit2.toString();
  } else {
    leadingMenit = menit2;
  }
  if (jam2 < 10) {
    leadingJam = "0" + jam2.toString();
  } else {
    leadingJam = jam2;
  }

  hariK.innerText = aHari.toString();
  jamK.innerText = leadingJam;
  menitK.innerText = leadingMenit;
  detikK.innerText = leadingDetik;
}

function adaMK(jadwal) {
  jadwalK.innerHTML = "";
  let MKE = document.createElement("div");
  let dosenE = document.createElement("div");
  let ruangE = document.createElement("div");
  MKE.id = "MK";
  dosenE.id = "dosen";
  ruangE.id = "ruang";
  MKE.innerText = jadwal.MK;
  dosenE.innerText = jadwal.dosen;
  ruangE.innerText = jadwal.ruang;
  jadwalK.appendChild(MKE);
  jadwalK.appendChild(dosenE);
  jadwalK.appendChild(ruangE);
}

function adaMKNext(jadwal) {
  jadwalNextK.innerHTML = "";
  let MKE = document.createElement("div");
  let dosenE = document.createElement("div");
  let ruangE = document.createElement("div");
  MKE.id = "MK";
  dosenE.id = "dosen";
  ruangE.id = "ruang";
  MKE.innerText = jadwal.MK;
  dosenE.innerText = jadwal.dosen;
  ruangE.innerText = jadwal.ruang;
  jadwalNextK.appendChild(MKE);
  jadwalNextK.appendChild(dosenE);
  jadwalNextK.appendChild(ruangE);
}
