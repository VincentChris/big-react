import { Key, Props, Ref, Type } from 'shared/ReactTypes';
import type { WorkTag } from './workTags';
import { NoFlags, type Flags } from './fiberFlags';

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
	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		// 本身的状态
		this.tag = tag;
		this.key = key;
		this.stateNode = null;
		this.type = null;
		this.ref = null;

		// 数形结构的相关状态
		this.return = null;
		this.sibling = null;
		this.child = null;
		this.index = 0;

		// 作为工作单元的状态
		this.pendingProps = pendingProps;
		this.memorizedProps = null;

		this.alternate = null;
		this.flags = NoFlags;
	}
}
