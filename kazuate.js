// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

let w = document.querySelector('p#result');
w.textCOntent="";

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する

  let i = document.querySelector('input[name="suji"]');
  let nyuryoku = i.value;
  let yoso = Number(nyuryoku);

  kaisu = kaisu + 1;
  console.log(kaisu + "回目の予想:" + yoso);

  let h1 = document.querySelector('span#kaisu');
  h1.textContent = kaisu;

  let h2 = document.querySelector('span#answer');
  h2.textContent = yoso;

  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  if(kaisu  < 3){
    if(yoso === kotae ){
        w.textContent = '正解です．おめでとう!';
    } else if(yoso < kotae){
        w.textContent = 'まちがい．答えはもっと大きいですよ';
    } else if(yoso > kotae){
        w.textContent = 'まちがい．答えはもっと小さいですよ';
    }
  }else if(kaisu === 3){
    if(yoso === kotae){
      w.textContent = '正解です．おめでとう!';
    } else if(yoso !== kotae){
        w.textContent = 'まちがい．残念でした答えは ' + kotae + 'です．';
    }
  } else {
    w.textContent = '答えは ' + kotae + 'でした．すでにゲームは終わっています';
  }
}