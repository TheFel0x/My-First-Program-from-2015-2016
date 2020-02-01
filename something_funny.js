/*
very old version from 2015
I think I didn't know what I was doing at all
lmao
*/

for (var EINGABE = prompt ("Wort",""), var E = 0, var P = 0, var SATZ = "", var POOL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; SATZ.length <= EINGABE.length; ) {
    if (EINGABE[E] == POOL[P]) {
        POOL.reverse();
        SATZ += POOL[P];
        ++E;
        POOL.reverse();
        P = 0;
        continue;
    }
    else {
        P += 1;
        continue;
    };
};
alert("+SATZ+");
