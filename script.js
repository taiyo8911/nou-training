const text = [
    "赤",
    "緑",
    "青",
    "白",
]

const color = [
    "red",
    "green",
    "blue",
    "white",
]

const answer_color = {
    "red": "赤",
    "green": "緑",
    "blue": "青",
    "white": "白",
}

// 乱数を作る
function getRandom() {
    let random = Math.floor(Math.random() * text.length);
    return random;
}

// 画面にランダムな文字を表示する
let random_text = getRandom();
document.getElementById("text").innerText = text[random_text];


// 文字色をランダムに変える
let random_color = getRandom();
document.getElementById("text").style.color = color[random_color];


// 文字の「色の名前」をランダムな場所に表示する
let ans_display_number = getRandom() + 1;
let num = random_color;
document.getElementById(`select${ans_display_number}`).innerText = answer_color[color[num]];