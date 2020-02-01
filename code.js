var EINGABE = prompt("Wort", "");
var E = 0;
var P = 0;
var SATZ = "";
var POOL = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", ":", ";", "-", "_", "!", "?", "(", ")", "/", "@", "#", "&", "ß"];
for (; SATZ.length < EINGABE.length;) {
    if (EINGABE[E] == " ") {
        SATZ += " ";
        ++E;
        P = 0;
    };
    if (EINGABE[E] == POOL[P]) {
        POOL.reverse();
        SATZ += POOL[P];
        ++E;
        POOL.reverse();
        P = 0;
        continue;
    } else {
        P += 1;
        continue;
    };
};
prompt("" + SATZ + "", "" + SATZ + "");
