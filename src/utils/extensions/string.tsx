import dayjs from "dayjs";

declare global {
    interface String {
        toNumber(): number;
        toEnNumber(): string;
        toCurrency(): string;
        optional(message: string): string
        toLocaleDateString(template?: string, locale?: string): string
        isNullOrEmpty(): boolean
    }
}

String.prototype.toEnNumber = function () {
    return this
        .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => `${d.charCodeAt(0) - 1632}`) // Convert Arabic numbers
        .replace(/[۰۱۲۳۴۵۶۷۸۹]/g, d =>  `${d.charCodeAt(0) - 1776}`) // Convert Persian numbers
};

String.prototype.toCurrency = function (locals?: [string]) {
    const local = Intl.NumberFormat(locals ?? 'en-US')
    return local.format(Number(this)) // Convert Persian numbers
};

String.prototype.toNumber = function () {
    return Number(this)
};

String.prototype.optional = function (message: string) {
    return this ? this === '' ? message : this.toString() : message
};

String.prototype.toLocaleDateString = function (template?: string, locale?: string) {
    return dayjs(this?.toString(), {locale: locale}).format(template ?? 'YYYY/M/D')
};

String.prototype.isNullOrEmpty = function () {
    return !this || this === '';
};

export {}