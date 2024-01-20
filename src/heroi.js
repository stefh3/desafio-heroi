
// criar uma classe de herói:
class hero {
    constructor(name, age, role, weapon) {
      this.name = name;
      this.age = age;
      this.role = role;
      this.weapon = weapon;
    }
  // adicionar propriedades e método:
    atacar() {
      console.log(`A ${this.role} se chama ${this.name} e atacou usando uma ${this.weapon}`);
    }
  }
  
  let heroina = new hero('Mei', '5 anos', 'ninja', 'shuriken');
  heroina.atacar();