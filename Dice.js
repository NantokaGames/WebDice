var WebDice = function() {
    num = 6;
    r = Math.floor(Math.random() * num);
    a = 1
    document.write('<div class=("again")><input type="button"value="もう一度サイコロを振る" onclick="Again()"></div>')
    document.write('<div class=("again")><input type="button"value="ホームへ" onclick="home()"></div>')
    document.write('<div class=("again")><input type="button"value="リセット" onclick="Delete()"></div>')
    document.write('<img src="images/' + r + '.png" class"dice" />')
}
var Again = function() {
    num = 6;
    r = Math.floor(Math.random() * num);
    a = 1
    document.write('<ul id="dice"><img src="images/' + r + '.png" class"dice" /><ui>')
}
var home = function() {
    document.write('<h1>webダイス</h1>')
    document.write('<p>web上で簡単に実行できるダイスです</p>')
    document.write('<div class="dice"><input type="button" value="サイコロを振る" onclick="WebDice()"></div>')
}
