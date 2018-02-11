export declare function createClassProxy<T>(target: createClassProxy.ClassProxyStatic<T>, handler: createClassProxy.IClassProxyHandler): createClassProxy.ClassProxyStatic<T>;
export declare module createClassProxy {
    interface ClassProxyStatic<T> {
        new (...argv: any[]): T;
    }
    interface IClassProxyHandler {
        get?(target: any, prop: any, receiver?: any): any;
        set?(target: any, property: any, value: any, receiver?: any): boolean;
        ownKeys?(target: any): string[];
        getOwnPropertyDescriptor?(target: any, prop: any): {
            value?: boolean;
            writable?: boolean;
            get?<T>(): T;
            set?(value): void;
            configurable?: boolean;
            enumerable?: boolean;
        };
        construct?<T>(target: any, args?: any[]): T;
        setPrototypeOf?(target: any): any;
        setPrototypeOf?(target: any, prototype: any): boolean;
        isExtensible?(target: any): boolean;
        preventExtensions?(target: any): boolean;
        defineProperty?(target: any, key: any, descriptor: any): boolean;
        has?(target: any, prop: any): boolean;
        deleteProperty?(target: any, property: any): boolean;
        apply?(target: any, thisArg: any, argumentsList?: any[]): any;
    }
}
export default createClassProxy;
