import { ReactElementType } from './ReactSymbols';
export type ReactType = any;
export type Key = string | number | null;
export type Ref = any;
export type Props = any;
export type ReactElement = {
	$$typeof: ReactElementType;
	type: ReactType;
	key: Key;
	ref: Ref;
	props: Props;
};
