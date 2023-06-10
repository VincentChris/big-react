import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols';
import {
	Key,
	Props,
	ReactElementType,
	ReactType,
	Ref
} from 'shared/ReactTypes';

// ReacElement
const ReactElement = (
	type: ReactType,
	key: Key,
	ref: Ref,
	props: Props
): ReactElementType => {
	return {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props
	};
};

export const jsx = (type: ReactType, config: Props, ...children: any[]) => {
	let Key: Key = null;
	let ref: Ref = null;
	const props: Props = {};

	for (const prop in config) {
		if (prop === 'key') {
			if (config[prop] !== undefined) {
				Key = config[prop];
			}
			continue;
		}
		if (prop === 'ref') {
			if (config[prop] !== undefined) {
				ref = config[prop];
			}
			continue;
		}
		if (Object.hasOwnProperty.call(config, prop)) {
			props[prop] = config[prop];
		}
		const childrenLength = children.length;
		if (childrenLength) {
			if (childrenLength === 1) {
				props.children = children[0];
			} else {
				props.children = children;
			}
		}
	}
	return ReactElement(type, Key, ref, props);
};

export const jsxDev = jsx;
