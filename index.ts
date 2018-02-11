/**
 * Created by user on 2018/2/11/011.
 */

export function createClassProxy<T>(target: createClassProxy.ClassProxyStatic<T>, handler: createClassProxy.IClassProxyHandler): createClassProxy.ClassProxyStatic<T>
{
	let construct;
	if (handler.construct)
	{
		construct = handler.construct;
	}

	return new Proxy(target, {
		construct(target, args)
		{
			let obj;
			if (construct)
			{
				obj = construct(target, args);
			}
			else
			{
				obj = new target(...args);
			}

			return new Proxy(obj, handler);
		}
	});
}

export module createClassProxy
{
	export interface ClassProxyStatic<T>
	{
		new(...argv): T;
	}

	export interface IClassProxyHandler
	{
		get?(target, prop, receiver?),

		set?(target, property, value, receiver?): boolean,

		ownKeys?(target): string[],

		getOwnPropertyDescriptor?(target, prop): {
			value?: boolean,
			writable?: boolean,
			get?<T>(): T,
			set?(value): void,
			configurable?: boolean,
			enumerable?: boolean,
		},

		construct?<T>(target, args?: any[]): T;

		setPrototypeOf?(target),

		setPrototypeOf?(target, prototype): boolean,

		isExtensible?(target): boolean,

		preventExtensions?(target): boolean,

		defineProperty?(target, key, descriptor): boolean,

		has?(target, prop): boolean,

		deleteProperty?(target, property): boolean,

		apply?(target, thisArg, argumentsList?: any[]),
	}
}

export default createClassProxy;
