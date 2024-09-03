class Car {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    drive(): void {
        console.log(`Conduciendo un  ${this.marca}`);
    }
}


