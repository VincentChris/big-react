import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	ElementType,
	Key,
	Props,
	ReactElementType,
	Ref,
	Type
} from 'shared/ReactTypes';
function ReactElement(
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		key,
		ref,
		type,
		props,
		__mark: 'vincent'
	};
	return element;
}
export function jsx(type: ElementType, config: any, keyProp?: Key) {
	let ref = null;
	let key = null;
	const props: Props = {};
	if (keyProp !== undefined) {
		key = String(keyProp);
	}
	for (const propName in config) {
		if (Object.hasOwnProperty.call(config, propName)) {
			const propValue = config[propName];
			switch (propName) {
				case 'ref':
					ref = propValue;
					break;
				case 'key':
					key = String(propValue);
					break;
				default:
					props[propName] = propValue;
			}
		}
	}
	return ReactElement(type, key, ref, props);
}

export function createElement(
	type: ElementType,
	config: any,
	...children: any[]
) {
	let ref = null;
	let key = null;
	const props: Props = {};
	for (const propName in config) {
		if (Object.hasOwnProperty.call(config, propName)) {
			const propValue = config[propName];
			switch (propName) {
				case 'ref':
					ref = propValue;
					break;
				case 'key':
					key = String(propValue);
					break;
				default:
					props[propName] = propValue;
			}
		}
	}
	if (children.length > 1) {
		if (children.length === 1) {
			props.children = children[0];
		} else {
			props.children = children;
		}
	}
	return ReactElement(type, key, ref, props);
}
export const jsxDev = jsx;
