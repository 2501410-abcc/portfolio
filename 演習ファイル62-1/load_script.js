//★ ハンター名を表示する関数(起動時に実行)
function displayHunterName() {
  let hunterName = localStorage.getItem('hunterName');
  let h2tag = document.getElementById("displayName");

  if (hunterName != null && hunterName !== "")
     /*「hunterName が nullではない」＝つまり
    localStorage に値が存在している*/{
    h2tag.textContent = hunterName;
  } else {
    h2tag.textContent = "名無し";
  }
}

//★ ページ読み込み時に起動処理関数を実行する
window.onload = displayHunterName;