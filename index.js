"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createClassProxy(target, handler) {
    let construct;
    if (handler.construct) {
        construct = handler.construct;
    }
    return new Proxy(target, {
        construct(target, args) {
            let obj;
            if (construct) {
                obj = construct(target, args);
            }
            else {
                obj = new target(...args);
            }
            return new Proxy(obj, handler);
        }
    });
}
exports.createClassProxy = createClassProxy;
exports.default = createClassProxy;
