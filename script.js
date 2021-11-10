const text = [
    "赤",
    "緑",
    "青",
    "白",
    "黄",
]

const text_color = [
    "red",
    "green",
    "blue",
    "white",
    "yellow",
]

const answer_color = {
    "red": "赤",
    "green": "緑",
    "blue": "青",
    "white": "白",
    "yellow": "黄",

}



// 乱数を作る関数
function getRandom(min, max) {
    let random = Math.floor(Math.random() * max + min);
    return random;
}


// 画面にランダムな文字を表示する
let random_text = text[getRandom(0, text.length)];
document.getElementById("text").innerText = random_text;


// 文字の色をランダムな色に変える
let random_color = text_color[getRandom(0, text_color.length)];
document.getElementById("text").style.color = random_color;


// 文字の「色の名前」をランダムな場所に表示する

// 1-4のランダムな数値を取得する
let random_num = getRandom(1, 4);

// 正解の色名をランダムな位置に表示する。
document.getElementById(`select${random_num}`).innerText = answer_color[random_color];