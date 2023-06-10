import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

/**
 * 项目packages目录
 */
const packagesPath = path.resolve(__dirname, '../../packages');
/**
 * 项目packages dist目录
 */
const packagesDistPath = path.resolve(__dirname, '../../dist/node_modules');

/**
 * 解析包的路径
 * @param {string} pkgName 包名称
 * @param {boolean} isDist 是否是dist目录
 * @returns {string} 包的路径
 */
export function resolvePkgPath(pkgName, isDist) {
	if (isDist) {
		return `${packagesDistPath}/${pkgName}`;
	}
	return `${packagesPath}/${pkgName}`;
}

/**
 * 获取包的package.json内容
 * @param {string} pkgName 包名称
 * @returns {object} package.json内容
 */
export function getPackageJson(pkgName) {
	const pkgJsonPath = `${resolvePkgPath(pkgName)}/package.json`;
	if (!fs.existsSync(pkgJsonPath)) {
		throw new Error(`package.json not found in ${pkgJsonPath}`);
	}
	return JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
}

/**
 * 获取rollup基础插件数组
 * @param {object} params 配置对象
 * @param {object} params.typescript ts解析配置对象
 * @returns {array} rollup基础插件数组
 */
export function getBaseRollPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
