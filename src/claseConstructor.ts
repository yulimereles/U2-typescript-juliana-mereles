class Auto {
    marca: string;

    constructor(make: string) {
        this.marca = make;
    }

    drive(): void {
        console.log(`Conduciendo un ${this.marca}`)
    }
}

