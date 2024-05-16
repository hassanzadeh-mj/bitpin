
declare global {
    interface Array<T> {
        sortByName(): T[]

        getFirst(): T
        getFirstOrUndefined(): T | undefined

        getLast(): T,


        toOptions(disabled?: boolean): {
            label: string,
            value: number | string | undefined,
            disabled: boolean | undefined
        }[] | undefined
    }
}

Array.prototype.sortByName = function () {
    return this.sort(function (a: any, b: any) {
        return a.name > b.name ? 1 : -1
    })
};

Array.prototype.getFirst = function () {
    return this[0]
};

Array.prototype.getFirstOrUndefined = function () {
    return this && this.length > 0 && this[0]
};

Array.prototype.getLast = function () {
    return this[this.length - 1]
};


Array.prototype.toOptions = function (disabled) {
    return this?.map(p => ({
        label: p.name,
        value: p.id,
        disabled: disabled
    }));
};

export {}
