"use strict";
//Aufgabe 1 - Basics
//a) 
//Folgendes wird auf der Konsole ausgegeben:"Alles Klar? Logo!"
// Welche Variablennamen sind zulässig, welche nicht? Ein Variablenname darf z.B. keine Umlaute, Leerzeichen oder Bindestriche beinhalten. Was auch aufgefallen ist, ist, dass Kommazahlen wie 0.5 nicht akzeptiert werden. Des Weiteren sollten Wörter wie "var" oder "func" vermieden werden.
//b)
// Welcher Codeabschnitt wird wann ausgeführt und in welcher Reihenfolge werden die Funktionen aufgerufen?
//In Zeile 3 (hier Zeile 5) wird zunächst die Funktion "a1" aufgerufen, wodurch in der Konsole "Alles" ausgegeben wird. Als nächstes geht es bei mir in Zeile 6, in der die Funktion "func1()" steht. Weiter geht es in Zeile 13, in der die genannte Funktion "func1()" aufgerufen und "Klar?" in der Konsole ausgegeben wird. Danach geht es wieder in den oberen Block in Zeile 7, in der "a1" aufgerufen und "Logo!" ausgegeben wird.
//c)
var Aufgabe1;
(function (Aufgabe1) {
    function a1() {
        let x = "Alles";
        console.log(x);
        func2();
        console.log(x);
        func1();
        console.log(x);
        console.log("Logo!");
    }
    a1();
    function func1() {
        console.log("Klar?");
    }
    function func2() {
        console.log("Gut?");
    }
})(Aufgabe1 || (Aufgabe1 = {}));
//Aufgabe 2 - Kontinuierliche Variablenmanipulation
var Aufgabe2;
(function (Aufgabe2) {
    function a2() {
        let i = 9;
        do {
            console.log(i);
            i = i - 1;
        } while (i > 0);
    }
    a2();
})(Aufgabe2 || (Aufgabe2 = {}));
//Der Variablen i vom Typ number wurde zunächst der Wert 9 zugewiesen. Das Prinzip von do while Schleifen beruht darauf, dass sie erst einmal durchläuft bevor sie prüft ob sie nochmal laufen sollte. Hierbei soll immer i minus 1 ausgegeben werden und die while Schleife läuft so lange durch wie die Bedingung erfüllt ist, also so lange wie i größer als 0 ist. Demnach ist meine Vermutung, dass nacheinander die Werte von 9 bis 1 ausgegeben werden.
//Wann verändert sich etwas? Wenn i zum Beispiel kleiner als 0 oder gleich 0 ist wird nur die 9 ausgegeben, das "Runterzählen" bleibt aus. Solange i also größer als 0 ist, wird dem Wert von i eins abgezogen, es wird sozusagen so lange von i runtergezählt wie i größer als 0  ist.
//Aufgabe 3 - Fehler erkennen und vermeiden lernen
//Ich hatte mal das Namespace zum Beispiel rausgemacht, da wurde angezeigt, dass es ich um eine doppelte Implementierung handelt. Kein Leerzeichen nach void beispielsweise oder unpassende Namen und Zahlen in der Bezeichnung wurden ebenfalls angekreidet und somit konnte eine Konsolenausgabe nicht ausgeführt werden. Zuletzt hatte ich beim Code aus Aufgabe 1 noch das x in Zeile 14 beispielsweise gegen ein z ausgetauscht, woraufhin folgendes kam: ""z" ist deklariert, wird aber nie gelesen".
//Aufgabe 4 - Global vs Lokal
//a)
var Aufgabe4;
(function (Aufgabe4) {
    let x = "Hallo";
    console.log(x);
    func1(x);
    console.log(x);
    func2();
    func3();
    console.log(x);
    function func1(y) {
        y = "Bla";
        console.log(y);
    }
    function func2() {
        let x = "Blubb";
        console.log(x);
    }
    function func3() {
        x = "Test";
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//Ich vermute, dass folgendes nacheinander ausgegeben wird: "Hallo Bla Hallo Blubb Test"
//Als erstes wird die Variable x vom Typ string, welche den Wert "Hallo" zugewiesen bekommen hat, in der Konsole (Zeile 58) ausgegeben. Danach geht es zur "func4()", weshalb man dann in den Block (Zeile 65-67) kommt und "Bla" ausgegeben wird. Danach springt es wieder in Zeile 60, da ein x in der Ausgabe steht, wird somit nochmals ein "Hallo" ausgegeben. Im nächsten Schritt wird func5() aufgerufen, darum hüpft es in den Block (Zeile 70-72) der Funktion "func5()" und es wird "Blubb" ausgeführt. Zuletzt geht es wieder nach oben in Zeile 62 zur "func6()", diese wird ebenfalls aufgerufen, es geht in den unteren Block (75-77), dort wird auf die Variable x zugegriffen, die "Test" zugewiesen bekommen hat. Um "Test" letztendlich in der Konsole auszugeben, springt man wieder in Zeile 63.
//b)
//Lokale Variablen: sind zum Beispiel nur in Klassen, Schleifen oder Funktionen sichtbar und werden für jeden Methodenaufruf explizit angelegt. Lokale Variablen beziehen sich immer auf den Aufruf einer Methode:eine lokale Variable lebt also genau so lange wie der Aufruf der Methode. Bei dem Aufruf einer Methode kann aus der Methode heraus immer nur auf die eigenen Variablen zugreifen. Auf die lokalen Variablen anderer Methoden und auf die lokalen Variablen anderer Aufrufe der selben Methode kann nicht zugegriffen werden.
//Globale Variablen: sind überall sichtbar
//Übergabeparameter sind die Werte, die zwischen den Klammern stehen. Bei Übergabeparametern finden generell "Kopievorgänge" statt, d.h. es werden Werte kopiert. Bei einer Übergabe von  einem einfachen Datentyp wird der Wert des aktuellen Parameters in den formalen Parameter kopiert, d.h. Änderungen am formalen Parameter wirken sich nicht auf den aktuellen Parameter aus. Auf Objekte hingegen wird über Referenzen zugegriffen. Der formale Parameter enthält als Kopie die Referenz auf das Objekt, das der aktuelle Parameter referenziert. Hier wirken sich Änderungen auf den aktuellen Parameter aus, da im Fall von Referenzen Kopie & Original das gleiche Objekt referenzieren. Hier ist von call-by-reference die Rede. Die Werte können also verändert werden, da ihre "Adressen" übergeben werden. Im Vergleich dazu ist call-by-value eine Art Aufrufschnittstelle, d.h. wenn eine Methode mit Parametern aufgerufen wird, finden Zuweisungen statt. Der Wert eines aktuellen Parameters wird also dem entsprechenden formalen Parameter zugewiesen. Die Werte der aktuellen Parameter werden durch call-by-value also nicht verändert; es können aber die Attributwerte der aktuellen Parameter verändert werden.
//Funktionen geben einen Wert zurück, der direkt verwendet werden kann, während das Ergebnis bei Methoden ohne Rückgabewert zuerst gespeichert werden muss, da Variablen als Paramter übergeben werden.
//Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
//a)
var Aufgabe5a;
(function (Aufgabe5a) {
    let a = 2;
    let b = 3;
    multiply();
    function multiply() {
        console.log(a * b);
    }
})(Aufgabe5a || (Aufgabe5a = {}));
//b)
var Aufgabe5b;
(function (Aufgabe5b) {
    let zahl1 = 3;
    let zahl2 = 8;
    if (zahl1 < zahl2) {
        max();
        function max() {
            console.log(zahl2);
        }
    }
    else {
        console.log("Keine Angabe möglich!");
    }
})(Aufgabe5b || (Aufgabe5b = {}));
//c)
var Aufgabe5c;
(function (Aufgabe5c) {
    let summe = 1;
    let i = 1;
    while (i < 100) {
        i = i + 1;
        summe = summe + i;
    }
    console.log("Ergebnis: " + summe);
})(Aufgabe5c || (Aufgabe5c = {}));
//d)
var Aufgabe5d;
(function (Aufgabe5d) {
    for (let i = 0; i < 10; i++) {
        Math.random();
        console.log(Math.random() * 100 + 1);
    }
})(Aufgabe5d || (Aufgabe5d = {}));
//e)
var Aufgabe5e;
(function (Aufgabe5e) {
    function factorial(n) {
        let i = 1;
        let f = 1;
        while (i < n) {
            f *= i;
            i++;
        }
        console.log(f);
    }
    factorial(9);
})(Aufgabe5e || (Aufgabe5e = {}));
//f)
var Aufgabe5f;
(function (Aufgabe5f) {
    function leapyears() {
        for (let i = 1900; i < 2021; i++) {
            if (i % 4 == 0 && i % 100 != 0 && i % 400 == 0) {
                console.log(i);
            }
        }
    }
    leapyears();
})(Aufgabe5f || (Aufgabe5f = {}));
//Aufgabe 6 - Mehr Schleifen und Funktionen
//a)
var Aufgabe6a;
(function (Aufgabe6a) {
    treppe();
    function treppe() {
        let i = 0;
        let zeile = "";
        while (i < 7) {
            zeile += "#";
            console.log(zeile);
            i++;
        }
    }
})(Aufgabe6a || (Aufgabe6a = {}));
//b)
var Aufgabe6b;
(function (Aufgabe6b) {
    function zahlen() {
        for (let i = 1; i < 101; i++) {
            if (i % 3 == 0) {
                console.log("Fizz");
            }
            if (i % 5 == 0) {
                console.log("Buzz");
            }
            if (i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            }
        }
    }
    zahlen();
})(Aufgabe6b || (Aufgabe6b = {}));
//c)
var Aufgabe6c;
(function (Aufgabe6c) {
    function zahlen() {
        for (let i = 1; i < 101; i++) {
            if (i % 3 != 0 && i % 5 == 0) {
                console.log("FizzBuzz");
            }
            if (i % 3 != 0 && i % 5 != 0) {
                console.log(i);
            }
        }
    }
    zahlen();
})(Aufgabe6c || (Aufgabe6c = {}));
//d)
var Aufgabe6d;
(function (Aufgabe6d) {
    let schachbrett = "";
    for (let i = 0; i < 32; i++) {
        schachbrett += " ";
        schachbrett += "#";
        if (i % 4 == 0) {
            schachbrett += "/n";
        }
    }
})(Aufgabe6d || (Aufgabe6d = {}));
//e)
var Aufgabe6e;
(function (Aufgabe6e) {
    function schachbrettErstellen(b) {
        let schachbrett = "";
        let groesse = b * b / 2;
        for (let i = 0; i < groesse; i++) {
            schachbrett += " ";
            schachbrett += "#";
            if (i % (b / 2) == 0) {
                schachbrett += "/n";
            }
        }
    }
    schachbrettErstellen(3);
})(Aufgabe6e || (Aufgabe6e = {}));
//# sourceMappingURL=script.js.map