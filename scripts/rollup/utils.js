import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePackagePath(pkgName, isDist) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}

export function getPackageJson(pkgName) {
	const pkgPath = `${resolvePackagePath(pkgName, false)}/package.json`;
	const pkgContent = fs.readFileSync(pkgPath, 'utf-8');
	return JSON.parse(pkgContent);
}

export function getBaseRollupPlugins({ typescript } = { typescript: {} }) {
	return [cjs(), ts(typescript)];
}
