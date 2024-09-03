class Autoo {
    private marca: string;

    constructor(marca: string){
       this.marca = marca; 
    }
    drive(): void {
        console.log(`Conduciendo ${this.marca}`)
    }
    getMake(): string{
        return this.marca;
    }
}
const miAuto = new Autoo('Toyota');

