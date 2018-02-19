"use strict";
/**
 * Created by user on 2018/2/11/011.
 */
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
/**
 * try skip type check version
 * @param target
 * @param {IClassProxyHandler} handler
 * @returns {T}
 */
function createClassProxy2(target, handler) {
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
exports.createClassProxy2 = createClassProxy2;
exports.default = createClassProxy;
