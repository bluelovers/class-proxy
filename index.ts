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

/**
 * try skip type check version
 * @param target
 * @param {IClassProxyHandler} handler
 * @returns {T}
 */
export function createClassProxy2<T>(target, handler: IClassProxyHandler): T
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

export interface ClassProxyStatic<T> extends createClassProxy.ClassProxyStatic<T>
{

}

export interface IClassProxyHandler extends createClassProxy.IClassProxyHandler
{

}

export module createClassProxy
{
	export interface ClassProxyStatic<T>
	{
		new(...argv): T;
	}

	export interface IClassProxyHandler
	{
		/**
		 * A trap for getting property values.
		 * @param target
		 * @param prop
		 * @param receiver
		 */
		get?(target, prop, receiver?),

		/**
		 * A trap for setting property values.
		 * @param target
		 * @param property
		 * @param value
		 * @param receiver
		 * @returns {boolean}
		 */
		set?(target, property, value, receiver?): boolean,

		/**
		 * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
		 * @param target
		 * @returns {string[]}
		 */
		ownKeys?(target): string[],

		getOwnPropertyDescriptor?(target, prop): PropertyDescriptor & {
			value?: boolean,
			writable?: boolean,
			get?<T>(): T,
			set?(value): void,
			configurable?: boolean,
			enumerable?: boolean,
		},

		/**
		 * A trap for the new operator.
		 * @param target
		 * @param {any[]} args
		 * @returns {T}
		 */
		construct?<T>(target, args?: any[]): T;

		/**
		 * A trap for Object.getPrototypeOf.
		 * @param target
		 */
		getPrototypeOf?(target),

		/**
		 * A trap for Object.setPrototypeOf.
		 * @param target
		 * @param prototype
		 * @returns {boolean}
		 */
		setPrototypeOf?(target, prototype): boolean,

		/**
		 * A trap for Object.isExtensible.
		 * @param target
		 * @returns {boolean}
		 */
		isExtensible?(target): boolean,

		/**
		 * A trap for Object.preventExtensions.
		 * @param target
		 * @returns {boolean}
		 */
		preventExtensions?(target): boolean,

		/**
		 * A trap for Object.getOwnPropertyDescriptor.
		 * @param target
		 * @param key
		 * @param descriptor
		 * @returns {boolean}
		 */
		defineProperty?(target, key, descriptor: PropertyDescriptor): boolean,

		/**
		 * A trap for the in operator.
		 * @param target
		 * @param prop
		 * @returns {boolean}
		 */
		has?(target, prop): boolean,

		/**
		 * A trap for the delete operator.
		 * @param target
		 * @param property
		 * @returns {boolean}
		 */
		deleteProperty?(target, property): boolean,

		/**
		 * A trap for a function call.
		 * @param target
		 * @param thisArg
		 * @param {any[]} argumentsList
		 */
		apply?(target, thisArg, argumentsList?: any[]),
	}
}

export default createClassProxy;
