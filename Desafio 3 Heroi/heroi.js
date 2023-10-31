class Heroi {
  constructor(name, idade, tipoHeroi) {
    this.name = name;
    this.idade = idade;
    this.tipoHeroi = tipoHeroi;
  }
  atacar() {
    let ataque = "";
    switch (this.tipoHeroi) {
      case "Mago":
        ataque = "Magia";
        break;
      case "Guerreiro":
        ataque = "Espada";
        break;
      case "Monge":
        ataque = "Artes Mrciais";
        break;
      case "Ninja":
        ataque = "Shuriken";
        break;
      default:
        ataque = "Usou um ataque desconhecido";
    }
    return `O ${this.tipoHeroi} atacou usando ${ataque}`;
  }
}
const heroi1 = new Heroi("Zatanna", 8000, "Mago");
console.log(heroi1.atacar());
const heroi2 = new Heroi("Kakashi", 56, "Ninja");
console.log(heroi2.atacar());
