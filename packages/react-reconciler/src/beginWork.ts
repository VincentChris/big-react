import { FiberNode } from './fiber';

/**
 *
 * @param filber 深度优先遍历的递
 * 返回子节点
 */
export function beginWork(filber: FiberNode) {
	return filber.child;
}
