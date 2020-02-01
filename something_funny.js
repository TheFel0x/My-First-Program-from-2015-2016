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

/*
early version from 2015
it's february 2nd 2020 rn and I found a post from me asking why this isn't working online
date only said "5 years ago" but I can assume that I made it in 2015 because of that
*/
