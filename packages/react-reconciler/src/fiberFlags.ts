export const NoFlags = 0b0000001;
export const Placement = 0b0000010;
export const Update = 0b0000100;
export const Deletion = 0b0001000;
export type Flags =
	| typeof NoFlags
	| typeof Placement
	| typeof Update
	| typeof Deletion;
