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
  table.remove();
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  console.log(data.x);

  //DOM

  let table = document.createElement('table');
  let thead = document.createElement('thead');
  let tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  let row_1 = document.createElement('tr');
  let heading_1 = document.createElement('th');
  heading_1.innerHTML = data.name;
  row_1.appendChild(heading_1);
  tbody.appendChild(row_1);

  let row_2 = document.createElement('tr');
  let row_2_data_1 = document.createElement('td');
  row_2_data_1.innerHTML = "緯度";
  let row_2_data_2 = document.createElement('td');
  row_2_data_2.innerHTML = data.coord.lon;
  row_2.appendChild(row_2_data_1);
  row_2.appendChild(row_2_data_2);
  tbody.appendChild(row_2);

  let row_3 = document.createElement('tr');
  let row_3_data_1 = document.createElement('td');
  row_3_data_1.innerHTML = "経度";
  let row_3_data_2 = document.createElement('td');
  row_3_data_2.innerHTML = data.coord.lat;
  row_3.appendChild(row_3_data_1);
  row_3.appendChild(row_3_data_2);
  tbody.appendChild(row_3);

  let row_4 = document.createElement('tr');
  let row_4_data_1 = document.createElement('td');
  row_4_data_1.innerHTML = "天気";
  let row_4_data_2 = document.createElement('td');
  row_4_data_2.innerHTML = data.weather.description;
  row_4.appendChild(row_4_data_1);
  row_4.appendChild(row_4_data_2);
  tbody.appendChild(row_4);

  let row_5 = document.createElement('tr');
  let row_5_data_1 = document.createElement('td');
  row_5_data_1.innerHTML = "最低気温";
  let row_5_data_2 = document.createElement('td');
  row_5_data_2.innerHTML = data.main.temp_min;
  row_5.appendChild(row_5_data_1);
  row_5.appendChild(row_5_data_2);
  tbody.appendChild(row_5);

  let row_6 = document.createElement('tr');
  let row_6_data_1 = document.createElement('td');
  row_6_data_1.innerHTML = "最高気温";
  let row_6_data_2 = document.createElement('td');
  row_6_data_2.innerHTML = data.main.temp_max;
  row_6.appendChild(row_6_data_1);
  row_6.appendChild(row_6_data_2);
  tbody.appendChild(row_6);

  let row_7 = document.createElement('tr');
  let row_7_data_1 = document.createElement('td');
  row_7_data_1.innerHTML = "湿度";
  let row_7_data_2 = document.createElement('td');
  row_7_data_2.innerHTML = data.main.humidity;
  row_7.appendChild(row_7_data_1);
  row_7.appendChild(row_7_data_2);
  tbody.appendChild(row_7);

  let row_8 = document.createElement('tr');
  let row_8_data_1 = document.createElement('td');
  row_8_data_1.innerHTML = "風速";
  let row_8_data_2 = document.createElement('td');
  row_8_data_2.innerHTML = data.wind.gust;
  row_8.appendChild(row_8_data_1);
  row_8.appendChild(row_8_data_2);
  tbody.appendChild(row_8);

  let row_9 = document.createElement('tr');
  let row_9_data_1 = document.createElement('td');
  row_9_data_1.innerHTML = "風向";
  let row_9_data_2 = document.createElement('td');
  row_9_data_2.innerHTML = data.wind.deg;
  row_9.appendChild(row_9_data_1);
  row_9.appendChild(row_9_data_2);
  tbody.appendChild(row_9);

  u1.insertAdjacentElement('beforeend', table);
}

function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}
////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
console.log(data.coord.lon);
console.log(data.coord.lat);
console.log(data.weather.description);
console.log(data.main.temp_min);
console.log(data.main.temp_max);
console.log(data.main.humidity);
console.log(data.wind.speed);
console.log(data.wind.deg);