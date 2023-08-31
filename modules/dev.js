import { Employee } from "./employee.js";

export class Dev extends Employee {
    #jobType;

    constructor(id, salary) {
        super(id, salary);
        this.#jobType = "Dev";
    }

    getJobType() {
        return `I am a ${this.#jobType}`;
    }

    static returnArrayOfDevs(...devs) {
        const devInstances = [];
        for (const dev of devs) {
            if (dev instanceof Dev) {
                devInstances.push(dev);
            }
        }
        return devInstances;
    }
}