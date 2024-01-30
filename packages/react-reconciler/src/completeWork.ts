import { FiberNode } from './fiber';

/**
 *
 * @param filber 递归中的归
 */
export function completeWork(filber: FiberNode) {
	return filber.sibling;
}
