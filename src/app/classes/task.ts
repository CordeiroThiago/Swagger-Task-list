export class Task {
    constructor(private _id: number = 0,
        private _name: string = "",
        private _description: string = "",
        private _status: string = "open") {}
    
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get description() {
        return this._description;
    }

    get status() {
        return this._status
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

    set status(status: string) {
        this._status = status;
    }
}