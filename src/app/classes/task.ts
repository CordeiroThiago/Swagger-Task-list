import { Status } from './status';

export class Task {
    constructor(private _id: string = "",
        private _name: string = "",
        private _description: string = "",
        private _status: Status = new Status(),
        private _active: boolean = true,
        private _listId: string = "",
        private _createDate: Date = new Date(),
        private _updateDate: Date = new Date(),
        private _sortValue: number = 0,
        private _authorId: string = "",
        private _tenantId: string = "") {}
    
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

    set description(description: string) {
        this._description = description;
    }

    set status(status: Status) {
        this._status = status;
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