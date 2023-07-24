let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

function sendRequest(){
  let rs = document.querySelectorAll('input[name="country"]');
  for(let r of rs) {
    if(r.checked){
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + r.id + '.json';

      axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
    }
  }
}

let u1 = document.querySelector('div#result');

function showResult(resp) {
  u1.remove();
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

}

function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}