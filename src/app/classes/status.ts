export class Status {
    constructor(private _id: string = "",
        private _name: string = "",
        private _statusType: string = "",
        private _color: string = "",
        private _active: boolean = true,
        private _listId: string = "",
        private _createDate: Date = new Date(),
        private _updateDate: Date = new Date(),
        private _enableTaskCreation: boolean = false,
        private _sortValue: number = 0,
        private _authorId: string = "",
        private _tenantId: string = "") {}
    
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get statusType() {
        return this._statusType;
    }

    get color() {
        return this._color;
    }

    get active() {
        return this._active;
    }

    get listId() {
        return this._listId;
    }

    get createDate() {
        return this._createDate;
    }

    get updateDate() {
        return this._updateDate;
    }

    get enableTaskCreation() {
        return this._enableTaskCreation;
    }

    get sortValue() {
        return this._sortValue;
    }

    get authorId() {
        return this._authorId;
    }

    get tenantId() {
        return this._tenantId;
    }
    
    set id(id: string) {
        this._id = id;
    }

    set name(name: string) {
        this._name = name;
    }

    set statusType(statusType: string) {
        this._statusType = statusType;
    }

    set color(color: string) {
        this._color = color;
    }

    set active(active: boolean) {
        this._active = active;
    }

    set listId(listId: string) {
        this._listId = listId;
    }

    set createDate(createDate: Date) {
        this._createDate = createDate;
    }

    set updateDate(updateDate: Date) {
        this._updateDate = updateDate;
    }

    set enableTaskCreation(enableTaskCreation: boolean) {
        this._enableTaskCreation = enableTaskCreation;
    }

    set sortValue(sortValue: number) {
        this._sortValue = sortValue;
    }

    set authorId(authorId: string) {
        this._authorId = authorId;
    }

    set tenantId(tenantId: string) {
        this._tenantId = tenantId;
    }
}
