class Bulb {
    private watt: number;

    constructor() {
        // Initialize the bulb to be off
        this.watt = 0;
    }

    setWatt(watt: number): void {
        this.watt = watt;
        console.log(`Bulb is now ${this.watt} watt.`);
    }
}

class Dimmer {

    private level: number;
    private bulb: Bulb;
    private readonly maxLevel: number;
    private readonly midLevel: number;
    private readonly minLevel: number;

    constructor(bulb: Bulb) {
        this.bulb = bulb;
        this.maxLevel = 15;
        this.midLevel = 5;
        this.minLevel = 0;

        // dimmer lowest level
        this.level = 0;
    }

    setLevel(level: number): void {
        this.level = level;
        this.updateWatt();
    }

    private updateWatt(): void {
        if (this.level == this.minLevel) {
            this.bulb.setWatt(0);
        } else if (this.level == this.midLevel) {
            this.bulb.setWatt(2.5);
        } else if (this.level == this.maxLevel) {
            this.bulb.setWatt(5);
        } else {
            console.log("level not supported!");
        }
    }
}

const bulb = new Bulb();
// moving bulb object to dimmer constructor
const dimmer = new Dimmer(bulb);


dimmer.setLevel(0);
dimmer.setLevel(5);
dimmer.setLevel(15);

//not supported
dimmer.setLevel(7);  
