import { Key, Props, Ref, Type } from 'shared/ReactTypes';
import type { WorkTag } from './workTags';

export class FiberNode {
	tag: WorkTag;
	pendingProps: Props;
	key: Key;
	stateNode: any;
	type: Type;
	return: FiberNode | null;
	child: FiberNode | null;
	sibling: FiberNode | null;
	index: number;
	ref: Ref | null;
	memorizedProps: Props | null;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;
		this.ref = null;

		this.pendingProps = pendingProps;
		this.memorizedProps = null;
	}
}
