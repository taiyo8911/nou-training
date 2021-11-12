const textArr = [
    "赤",
    "緑",
    "青",
    "白",
    "黄",
]

const colorArr = [
    "red",
    "green",
    "blue",
    "white",
    "yellow",
]

const colorObj = {
    "red": "赤",
    "green": "緑",
    "blue": "青",
    "white": "白",
    "yellow": "黄",

}

// 正解の値
let correct;

// 選択肢を入れる配列
let choices = [];
let choice1; // 正解
let choice2; // ひっかけ
let choice3, choice4; // その他


// 乱数を作る関数
function getRandom(min, max) {
    let random = Math.floor(Math.random() * max + min);
    return random;
}


// 画面にランダムな文字を表示する（必須の選択肢）
let random_text_num = getRandom(0, textArr.length);
let random_text = textArr[random_text_num];
document.getElementById("text").innerText = random_text;


// 必須選択肢に入れる
choice1 = random_text;
choices.push(choice1);


// 文字の色をランダムな色に変える（正解の選択肢）
let random_color_num = getRandom(0, colorArr.length);
let random_color = colorArr[random_color_num];
document.getElementById("text").style.color = random_color;

// 正解を決定する
correct = random_color;

// 必須選択肢に入れる
choice2 = colorObj[correct];
choices.push(choice2);


// その他の選択肢をランダムに選ぶ
var index = textArr.indexOf(choice1);
textArr.splice(index, 1)
index = textArr.indexOf(choice2);
textArr.splice(index, 1)


choice3 = textArr[getRandom(0, 2)];
choices.push(choice3);

var index = textArr.indexOf(choice3);
textArr.splice(index, 1)

choice4 = textArr[getRandom(0, 1)];
choices.push(choice4);


// choices配列の順番をシャッフルして表示


// リトライボタンを表示する
if (count == 10) {
    document.getElementById("retry").style.display = "block";
}