class formaDeBolo {
  constructor(saborDaMassa, saborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.saborRecheio = saborRecheio;
  }
  escrever() {
    console.log(
      `um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`
    );
  }
  assar() {
    console.log("assando bolo de " + this.saborDaMassa);
  }
}

let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloPremium = new formaDeBolo("baunilha", "coco");

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();
