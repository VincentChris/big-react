const isSupportSymbol = typeof Symbol === 'function' && Symbol.for;
export const REACT_ELEMENT_TYPE = isSupportSymbol
	? Symbol.for('React.Element')
	: 0xeac7;
export type ReactElementSymbolType = typeof REACT_ELEMENT_TYPE;
