// variabels
const main_card_sc = document.querySelector("#main_card_sc");
const xhr = new XMLHttpRequest();

// action
window.addEventListener("load", function () {
  showSC("basic");
});

// functions
function tmplt(data, type) {
  let tmplt = "";
  data.forEach((dt) => {
    if (dt.type == type) {
      tmplt += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm border">
                    <div class="card-img px-2 pt-2">
                        <img
                        src="${dt.img_folder + dt.img_main}.png"
                        alt="Project Img"
                        class="my-img-card rounded border border-white"
                        />
                        <div class="my-harga badge rounded badge-warning py-2 px-2 font-weight-bold">
                            ${dt.harga}
                        </div>
                    </div>
                    <div class="card-body px-3 pt-2 pb-3">
                        <h5 class="font-weight-bold mb-1">
                            ${dt.judul}
                        </h5>
                        <small class="text-muted d-block font-weight-bold mb-2">
                            Terjual : ${dt.terjual}
                        </small>
                        <div class="text-right">
                            <a href="detail-sc.html?id=${
                              dt.id
                            }" class="btn btn-dark px-3 py-2 btn-sm">
                                Detail
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
    }
  });
  return tmplt;
}

function showSC(type) {
  xhr.onload = () => {
    if (xhr.status == 200) {
      const datas = JSON.parse(xhr.responseText);
      main_card_sc.innerHTML = tmplt(datas.datas, type);
    } else {
      console.log("gagal load data");
    }
  };
  xhr.open("GET", "resource.json");
  xhr.send();
}
