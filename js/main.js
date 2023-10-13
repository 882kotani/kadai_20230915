//検索関数
const srch_img = async (url, show_num) => {
  // 非同期処理
  const res = await fetch(url);
  const data = await res.json();
  // 最も大枠のコンテナid取得
  const imageContainer = document.getElementById("imageContainer");

  // console.log(data);
  // console.log(data.results[0].urls);
  // console.log(data.results[0].urls.raw);

  for (let i = 0; i < show_num; i++) {
    // imageContainer内のタグを生成（div、img、アイコン用span）
    const divElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const iconSpan = document.createElement("span");

    // classの名前付加（div:wrap_img、img：img_grid）
    divElement.className = "wrap_img";
    imageElement.className = "img_grid";
    imageElement.id = "img" + i; //各画像にidを割り当て
    iconSpan.className = "material-symbols-outlined";

    imageElement.src = data.results[i].urls.regular; // img要素（src）に取得先URLを入力
    divElement.appendChild(imageElement); // divタグ内にimg要素を追加

    //-------------アイコンをオーバーレイさせる------------
    iconSpan.innerText = "download_for_offline"; // アイコンのテキストを設定
    divElement.appendChild(iconSpan);

    // divタグをimageContainerに追加
    imageContainer.appendChild(divElement);
  }

  //ダウンロードボタンを押した時に画像のIDを表示させる。
  const alert = await alert_id();
};

//ダウンロードボタンを押した時に画像のIDを表示させる。
const alert_id = async () => {
  const dl_btn = document.querySelectorAll(".material-symbols-outlined");

  // console.log(dl_btn);

  dl_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.id);
      alert("DLボタンが押されました");
    });
  });
};
