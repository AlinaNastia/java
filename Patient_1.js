class Patient {
    constructor(f, i, o, d, g, sh) {
    this.F = f;
    this.I = i;
    this.O = o;
    this.D = new Date(d);
    this.G = g;
    this.SH = sh;
    }
    setById() {
    document.getElementById("F").textContent = this.F;
    document.getElementById("I").textContent = this.I;
    document.getElementById("O").textContent = this.O;
    document.getElementById("D").textContent = this.D.getFullYear();
    document.getElementById("G").textContent = this.G;
    document.getElementById("SH").textContent = this.SH;    
    }
}
let Ivanov = new Patient('Иванов','Иван','Иванович', new Date(1980, 6, 10), "м", "Назначено");
Ivanov.setById();