declare const fromString: (str: string, mask: string) => Date | null;

declare const asString: (date: Date, mask: string) => string;

declare global {
    interface DateConstructor {
        fromString: (str: string, mask: string) => Date | null;
    }
    interface Date {
        asString: (mask: string) => String;
    }
}

export { asString as dateAsString, fromString as dateFromString };
