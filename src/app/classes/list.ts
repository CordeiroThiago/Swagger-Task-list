export class List {
    constructor(private _id: number = 0,
        private _name: string = "",
        private _description: string = "") {}
    
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    set id(id: number) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set description(description: string) {
        this._description = description;
    }
}