"use strict";
//Aufgabe 1 - Mehr "langweilige" Konsolenausgaben
//a)
var Aufgabe_1a;
(function (Aufgabe_1a) {
    console.log(min([5, 28, 1, 2]));
    function min(beliebigeZahl) {
        let minZahl = beliebigeZahl[0];
        for (let i = 0; i < beliebigeZahl.length; i++) {
            if (minZahl > beliebigeZahl[i]) {
                minZahl = beliebigeZahl[i];
            }
        }
        return minZahl;
    }
})(Aufgabe_1a || (Aufgabe_1a = {}));
//b)
var Aufgabe_1b;
(function (Aufgabe_1b) {
    console.log(isEven(50), isEven(75));
    //vereinfacht
    function isEven(n) {
        //let  iseven: boolean = false;
        if (n % 2 == 1) {
            return false;
        }
        if (n % 2 == 0) {
            return true;
        }
        let ergebnis = isEven(n - 2);
        return ergebnis;
    }
    //Bei -1 zählt die Funktion in den Unendlichen Minusberreich! Dies kann man umgehen, indem man eine 2. Funktion schreibt, die Addition statt Subtraktion verwendet.
})(Aufgabe_1b || (Aufgabe_1b = {}));
//c)
var Aufgabe_1c;
(function (Aufgabe_1c) {
    class Student {
        constructor(_vorname, _name, _matrikelnummer) {
            this.vorname = _vorname;
            this.name = _name;
            this.matrikelnummer = _matrikelnummer;
        }
        zeigeInfos() {
            console.log(this.vorname, this.name, this.matrikelnummer);
        }
    }
    let student1 = new Student("Gerhardt", "Mustermann", 9283);
    let student2 = new Student("Heinz", "Groß", 8530);
    let student3 = new Student("Walter", "Klein", 3948);
    let studenten = [student1,
        student2,
        student3,
        new Student("Letzer", "Student", 3948)
    ];
    console.log(studenten[2].vorname);
    console.log(studenten[0].name);
    console.log(studenten[1].matrikelnummer);
    for (let i = 0; i < studenten.length; i++) {
        studenten[i].zeigeInfos();
    }
})(Aufgabe_1c || (Aufgabe_1c = {}));
//Aufgabe 2 - Arrays
//a)
var Aufgabe_2a;
(function (Aufgabe_2a) {
    let arr = [5, 42, 17, 2018, -10, 60, -10010];
    let arrBack = backwards(arr);
    console.log(arr);
    console.log(arrBack);
    console.log(join(arr, [15, 9001, -440]));
    console.log(join([123, 666, -911], arr, ["lol", "lol2", "lol3", "lol4"])); // Bonus b)
    arr = split(arr, 0, 4);
    console.log(arr);
    console.log(split(arr, 1, 2));
    console.log(split(arr, 2, 0)); // Bonus c)
    console.log(split(arr, -1, 2)); // Bonus c)
    console.log(split(arr, 0, 7)); // Bonus c)
    function backwards(n) {
        let backwardsarray = [n.length - 1];
        for (let i = 0; i < n.length; i++) {
            backwardsarray[i] = n[n.length - 1 - i];
        }
        return backwardsarray;
    }
    //hier wurde any gewählt, damit man auch ein array von einem unterschiedlichen Typen verbinden kann.
    function join(arrays, arrays2, arrays3) {
        let neuesArray = [];
        for (let i = 0; i < arrays.length; i++) {
            neuesArray.push(arrays[i]);
        }
        if (arrays2 != undefined) {
            for (let i = 0; i < arrays2.length; i++) {
                neuesArray.push(arrays2[i]);
            }
        }
        if (arrays3 != undefined) {
            for (let i = 0; i < arrays3.length; i++) {
                neuesArray.push(arrays3[i]);
            }
        }
        return neuesArray;
    }
    function split(arrays, n1, n2) {
        let neuesArray = [];
        if (n1 < n2) {
            for (let i = 0; i < arrays.length; i++) {
                if (i > n1 && i < n2) {
                    neuesArray.push(arrays[i]);
                }
            }
        }
        if (n1 > n2) {
            for (let i = 0; i < arrays.length; i++) {
                if (i < n1 && i > n2) {
                    neuesArray.push(arrays[i]);
                }
            }
        }
        return neuesArray;
    }
})(Aufgabe_2a || (Aufgabe_2a = {}));
//Aufgabe 3 - endlich was Visuelles
var Aufgabe_3;
(function (Aufgabe_3) {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    //Haus
    context.lineWidth = 10;
    context.strokeRect(75, 140, 150, 110);
    context.fillRect(130, 190, 40, 60);
    context.beginPath();
    context.moveTo(50, 140);
    context.lineTo(150, 60);
    context.lineTo(250, 140);
    context.closePath();
    context.stroke();
    class Rechteck {
        constructor(_xPos, _yPos, _b, _h, _speed) {
            this.xPos = _xPos;
            this.yPos = _yPos;
            this.b = _b;
            this.h = _h;
            this.speed = _speed;
        }
        draw() {
            context.beginPath();
            context.fillRect(this.xPos, this.yPos, this.b, this.h);
        }
        move() {
            this.xPos += this.speed;
            if (this.xPos > 800) {
                this.xPos = -200;
            }
        }
    }
    let rechteck = new Rechteck(50, 50, 200, 300, 2);
    //rechteck.draw();
    let rechtecke = [];
    for (let i = 0; i < 6; i++) {
        rechtecke.push(drawReckt());
        console.log(rechteck);
    }
    animate();
    function animate() {
        //Häuschen
        context.clearRect(0, 0, 500, 500);
        context.lineWidth = 5;
        context.strokeRect(75, 140, 150, 110);
        context.fillRect(130, 190, 40, 60);
        context.beginPath();
        context.moveTo(50, 140);
        context.lineTo(150, 60);
        context.lineTo(250, 140);
        context.closePath();
        context.stroke();
        for (let i = 0; i < 6; i++) {
            rechtecke[i].move();
            rechtecke[i].draw();
        }
        window.setTimeout(animate, 20);
    }
    //drawReckt und Create Reckt
    function drawReckt() {
        let rechteck = new Rechteck(Math.round(Math.random() * 200), Math.round(Math.random() * 200), Math.round(Math.random() * 200), Math.round(Math.random() * 200), Math.round(Math.random() * 5));
        rechteck.draw();
        return rechteck;
    }
})(Aufgabe_3 || (Aufgabe_3 = {}));
//# sourceMappingURL=script.js.map