// variables
const carouselDetailSCImages = document.querySelector("#carouselDetailSCImages");
const judul_sc = document.querySelector('#judul_sc');
const harga_sc = document.querySelector('#harga_sc');
const terjual_sc = document.querySelector('#terjual_sc');
const deskripsi_sc = document.querySelector('#deskripsi_sc');
const fitur_sc = document.querySelector('#fitur_sc');
const teknologi_sc = document.querySelector('#teknologi_sc');
const keterangan_sc = document.querySelector('#keterangan_sc');
const wa_sc = document.querySelector('#wa_sc');
const live_sc = document.querySelector('#live_sc');
const yt_sc = document.querySelector('#yt_sc');
const xhr = new XMLHttpRequest();
// actions
xhr.onload = () => {
  if (xhr.status == 200) {
    const datas = JSON.parse(xhr.responseText);
    const data_detail = searchData(datas.datas);
    isiKontenDetail(data_detail, datas.wa);
  } else {
    console.log("gagal load data");
  }
};
xhr.open("GET", "resource.json");
xhr.send();

// functions
function searchData(dt) {
  const url = window.location.search.substring(1);
  if(url == '') {
    window.location = 'index.html'
  }
  let new_url = url.split("&")[0];
  const id_now = new_url.split("=")[1];
  let result = null;
  dt.forEach((e) => {
    if (e.id == id_now) {
      result = e;
    }
  });
  return result;
}

function isiKontenDetail(data, wa) {
  carouselDetailSCImages.innerHTML = tmpltImgCarousel(data.img_folder,data.img_count);
  judul_sc.innerHTML = data.judul;
  harga_sc.innerHTML = data.harga;
  terjual_sc.innerHTML = data.terjual;
  deskripsi_sc.innerHTML = data.deskripsi;
  fitur_sc.innerHTML = data.fitur;
  teknologi_sc.innerHTML = templtTekonologi(data.teknologi);
  keterangan_sc.innerHTML = tmpltKeterangan(data.keterangan);
  btnWaSC(data.judul, wa);
  btnLiveSC(data.live_url);
  btnYtSC(data.yt_url);
}

function tmpltImgCarousel(path, count) {
  let tmplt = "";
  for (let i = 1; i <= count; i++) {
    tmplt += `
        <div class="carousel-item ${(i == 1) ? 'active' : ''}">
            <img
                class="d-block w-100"
                src="${path + i}.png"
                alt="First slide"
            />
        </div>
        `;
  }
  return tmplt;
}

function templtTekonologi(data) {
  let tmplt = '';
  data.forEach(dt => {
    tmplt += `<li>${dt}</li>`
  });
  return tmplt;
}

function tmpltKeterangan(data) {
  let tmplt = '';
  data.forEach(dt => {
    tmplt += `<li>${dt}</li>`
  });
  return tmplt;
}

function btnWaSC(judul, wa) {
  let link = `https://api.whatsapp.com/send/?phone=${wa}&text=Halo%20admin%20saya%20ingin%20membeli%20` +
  judul.replace(" ", "%20");
  wa_sc.setAttribute('href', link);
}

function btnLiveSC(url) {
  if(url == null) {
    live_sc.classList.add('d-none');
  } else {
    live_sc.setAttribute('href', url);
  }
}

function btnYtSC(url) {
  if(url == null) {
    yt_sc.classList.add('d-none');
  } else {
    yt_sc.setAttribute('href', url);
  }
}