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
createClassProxy.createClassProxy = createClassProxy;
createClassProxy.default = createClassProxy;
exports.default = createClassProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7O0FBRUgsU0FBZ0IsZ0JBQWdCLENBQUksTUFBNEMsRUFBRSxPQUE0QztJQUU3SCxJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksT0FBTyxDQUFDLFNBQVMsRUFDckI7UUFDQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztLQUM5QjtJQUVELE9BQU8sSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ3hCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSTtZQUVyQixJQUFJLEdBQUcsQ0FBQztZQUNSLElBQUksU0FBUyxFQUNiO2dCQUNDLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlCO2lCQUVEO2dCQUNDLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzFCO1lBRUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUNELENBQUMsQ0FBQztBQUNKLENBQUM7QUF4QkQsNENBd0JDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixpQkFBaUIsQ0FBSSxNQUFNLEVBQUUsT0FBMkI7SUFFdkUsSUFBSSxTQUFTLENBQUM7SUFDZCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQ3JCO1FBQ0MsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7S0FDOUI7SUFFRCxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUN4QixTQUFTLENBQUMsTUFBTSxFQUFFLElBQUk7WUFFckIsSUFBSSxHQUFHLENBQUM7WUFDUixJQUFJLFNBQVMsRUFDYjtnQkFDQyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUM5QjtpQkFFRDtnQkFDQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQjtZQUVELE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FDRCxDQUFDLENBQUM7QUFDSixDQUFDO0FBeEJELDhDQXdCQztBQThIRCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztBQUNyRCxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7QUFFNUMsa0JBQWUsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgdXNlciBvbiAyMDE4LzIvMTEvMDExLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGFzc1Byb3h5PFQ+KHRhcmdldDogY3JlYXRlQ2xhc3NQcm94eS5DbGFzc1Byb3h5U3RhdGljPFQ+LCBoYW5kbGVyOiBjcmVhdGVDbGFzc1Byb3h5LklDbGFzc1Byb3h5SGFuZGxlcik6IGNyZWF0ZUNsYXNzUHJveHkuQ2xhc3NQcm94eVN0YXRpYzxUPlxue1xuXHRsZXQgY29uc3RydWN0O1xuXHRpZiAoaGFuZGxlci5jb25zdHJ1Y3QpXG5cdHtcblx0XHRjb25zdHJ1Y3QgPSBoYW5kbGVyLmNvbnN0cnVjdDtcblx0fVxuXG5cdHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCB7XG5cdFx0Y29uc3RydWN0KHRhcmdldCwgYXJncylcblx0XHR7XG5cdFx0XHRsZXQgb2JqO1xuXHRcdFx0aWYgKGNvbnN0cnVjdClcblx0XHRcdHtcblx0XHRcdFx0b2JqID0gY29uc3RydWN0KHRhcmdldCwgYXJncyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdG9iaiA9IG5ldyB0YXJnZXQoLi4uYXJncyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgUHJveHkob2JqLCBoYW5kbGVyKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIHRyeSBza2lwIHR5cGUgY2hlY2sgdmVyc2lvblxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIHtJQ2xhc3NQcm94eUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEByZXR1cm5zIHtUfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2xhc3NQcm94eTI8VD4odGFyZ2V0LCBoYW5kbGVyOiBJQ2xhc3NQcm94eUhhbmRsZXIpOiBUXG57XG5cdGxldCBjb25zdHJ1Y3Q7XG5cdGlmIChoYW5kbGVyLmNvbnN0cnVjdClcblx0e1xuXHRcdGNvbnN0cnVjdCA9IGhhbmRsZXIuY29uc3RydWN0O1xuXHR9XG5cblx0cmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIHtcblx0XHRjb25zdHJ1Y3QodGFyZ2V0LCBhcmdzKVxuXHRcdHtcblx0XHRcdGxldCBvYmo7XG5cdFx0XHRpZiAoY29uc3RydWN0KVxuXHRcdFx0e1xuXHRcdFx0XHRvYmogPSBjb25zdHJ1Y3QodGFyZ2V0LCBhcmdzKTtcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0b2JqID0gbmV3IHRhcmdldCguLi5hcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5ldyBQcm94eShvYmosIGhhbmRsZXIpO1xuXHRcdH1cblx0fSk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NQcm94eVN0YXRpYzxUPiBleHRlbmRzIGNyZWF0ZUNsYXNzUHJveHkuQ2xhc3NQcm94eVN0YXRpYzxUPlxue1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNsYXNzUHJveHlIYW5kbGVyIGV4dGVuZHMgY3JlYXRlQ2xhc3NQcm94eS5JQ2xhc3NQcm94eUhhbmRsZXJcbntcblxufVxuXG5leHBvcnQgbW9kdWxlIGNyZWF0ZUNsYXNzUHJveHlcbntcblx0ZXhwb3J0IGludGVyZmFjZSBDbGFzc1Byb3h5U3RhdGljPFQ+XG5cdHtcblx0XHRuZXcoLi4uYXJndik6IFQ7XG5cdH1cblxuXHRleHBvcnQgaW50ZXJmYWNlIElDbGFzc1Byb3h5SGFuZGxlclxuXHR7XG5cdFx0LyoqXG5cdFx0ICogQSB0cmFwIGZvciBnZXR0aW5nIHByb3BlcnR5IHZhbHVlcy5cblx0XHQgKiBAcGFyYW0gdGFyZ2V0XG5cdFx0ICogQHBhcmFtIHByb3Bcblx0XHQgKiBAcGFyYW0gcmVjZWl2ZXJcblx0XHQgKi9cblx0XHRnZXQ/KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXI/KSxcblxuXHRcdC8qKlxuXHRcdCAqIEEgdHJhcCBmb3Igc2V0dGluZyBwcm9wZXJ0eSB2YWx1ZXMuXG5cdFx0ICogQHBhcmFtIHRhcmdldFxuXHRcdCAqIEBwYXJhbSBwcm9wZXJ0eVxuXHRcdCAqIEBwYXJhbSB2YWx1ZVxuXHRcdCAqIEBwYXJhbSByZWNlaXZlclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHNldD8odGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWUsIHJlY2VpdmVyPyk6IGJvb2xlYW4sXG5cblx0XHQvKipcblx0XHQgKiBBIHRyYXAgZm9yIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIGFuZCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLlxuXHRcdCAqIEBwYXJhbSB0YXJnZXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nW119XG5cdFx0ICovXG5cdFx0b3duS2V5cz8odGFyZ2V0KTogc3RyaW5nW10sXG5cblx0XHRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I/KHRhcmdldCwgcHJvcCk6IFByb3BlcnR5RGVzY3JpcHRvciAmIHtcblx0XHRcdHZhbHVlPzogYm9vbGVhbixcblx0XHRcdHdyaXRhYmxlPzogYm9vbGVhbixcblx0XHRcdGdldD88VD4oKTogVCxcblx0XHRcdHNldD8odmFsdWUpOiB2b2lkLFxuXHRcdFx0Y29uZmlndXJhYmxlPzogYm9vbGVhbixcblx0XHRcdGVudW1lcmFibGU/OiBib29sZWFuLFxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBBIHRyYXAgZm9yIHRoZSBuZXcgb3BlcmF0b3IuXG5cdFx0ICogQHBhcmFtIHRhcmdldFxuXHRcdCAqIEBwYXJhbSB7YW55W119IGFyZ3Ncblx0XHQgKiBAcmV0dXJucyB7VH1cblx0XHQgKi9cblx0XHRjb25zdHJ1Y3Q/PFQ+KHRhcmdldCwgYXJncz86IGFueVtdKTogVDtcblxuXHRcdC8qKlxuXHRcdCAqIEEgdHJhcCBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mLlxuXHRcdCAqIEBwYXJhbSB0YXJnZXRcblx0XHQgKi9cblx0XHRnZXRQcm90b3R5cGVPZj8odGFyZ2V0KSxcblxuXHRcdC8qKlxuXHRcdCAqIEEgdHJhcCBmb3IgT2JqZWN0LnNldFByb3RvdHlwZU9mLlxuXHRcdCAqIEBwYXJhbSB0YXJnZXRcblx0XHQgKiBAcGFyYW0gcHJvdG90eXBlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0c2V0UHJvdG90eXBlT2Y/KHRhcmdldCwgcHJvdG90eXBlKTogYm9vbGVhbixcblxuXHRcdC8qKlxuXHRcdCAqIEEgdHJhcCBmb3IgT2JqZWN0LmlzRXh0ZW5zaWJsZS5cblx0XHQgKiBAcGFyYW0gdGFyZ2V0XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNFeHRlbnNpYmxlPyh0YXJnZXQpOiBib29sZWFuLFxuXG5cdFx0LyoqXG5cdFx0ICogQSB0cmFwIGZvciBPYmplY3QucHJldmVudEV4dGVuc2lvbnMuXG5cdFx0ICogQHBhcmFtIHRhcmdldFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHByZXZlbnRFeHRlbnNpb25zPyh0YXJnZXQpOiBib29sZWFuLFxuXG5cdFx0LyoqXG5cdFx0ICogQSB0cmFwIGZvciBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLlxuXHRcdCAqIEBwYXJhbSB0YXJnZXRcblx0XHQgKiBAcGFyYW0ga2V5XG5cdFx0ICogQHBhcmFtIGRlc2NyaXB0b3Jcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRkZWZpbmVQcm9wZXJ0eT8odGFyZ2V0LCBrZXksIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcik6IGJvb2xlYW4sXG5cblx0XHQvKipcblx0XHQgKiBBIHRyYXAgZm9yIHRoZSBpbiBvcGVyYXRvci5cblx0XHQgKiBAcGFyYW0gdGFyZ2V0XG5cdFx0ICogQHBhcmFtIHByb3Bcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRoYXM/KHRhcmdldCwgcHJvcCk6IGJvb2xlYW4sXG5cblx0XHQvKipcblx0XHQgKiBBIHRyYXAgZm9yIHRoZSBkZWxldGUgb3BlcmF0b3IuXG5cdFx0ICogQHBhcmFtIHRhcmdldFxuXHRcdCAqIEBwYXJhbSBwcm9wZXJ0eVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGRlbGV0ZVByb3BlcnR5Pyh0YXJnZXQsIHByb3BlcnR5KTogYm9vbGVhbixcblxuXHRcdC8qKlxuXHRcdCAqIEEgdHJhcCBmb3IgYSBmdW5jdGlvbiBjYWxsLlxuXHRcdCAqIEBwYXJhbSB0YXJnZXRcblx0XHQgKiBAcGFyYW0gdGhpc0FyZ1xuXHRcdCAqIEBwYXJhbSB7YW55W119IGFyZ3VtZW50c0xpc3Rcblx0XHQgKi9cblx0XHRhcHBseT8odGFyZ2V0LCB0aGlzQXJnLCBhcmd1bWVudHNMaXN0PzogYW55W10pLFxuXHR9XG59XG5cbmNyZWF0ZUNsYXNzUHJveHkuY3JlYXRlQ2xhc3NQcm94eSA9IGNyZWF0ZUNsYXNzUHJveHk7XG5jcmVhdGVDbGFzc1Byb3h5LmRlZmF1bHQgPSBjcmVhdGVDbGFzc1Byb3h5O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDbGFzc1Byb3h5O1xuIl19