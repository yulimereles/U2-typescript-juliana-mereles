class Caar {
    marca: string;


    constructor(marca: string){
        this.marca = marca;
    }
    
}

class ElectricCar extends Caar{
    battetyLife: number;

    constructor(marca: string, battetyLife: number){
        super(marca);
        this.battetyLife = battetyLife;
    }

    charge(): void{
        console.log(`El auto ${this.marca} esta cargando: ${this.battetyLife}`)
    }
}

