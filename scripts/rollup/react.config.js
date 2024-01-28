import {
	getPackageJson,
	resolvePackagePath,
	getBaseRollupPlugins
} from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const { name, module } = getPackageJson('react');
const pkgPath = resolvePackagePath(name);
const distPath = resolvePackagePath(name, true);
export default [
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${distPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: getBaseRollupPlugins().concat(
			generatePackageJson({
				inputFolder: pkgPath,
				outputFolder: distPath,
				baseContents: ({ name, description, version }) => {
					return {
						name,
						description,
						version,
						main: 'index.js'
					};
				}
			})
		)
	},
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: {
			file: `${distPath}/jsx-runtime.js`,
			name: 'jsx-runtime.js',
			format: 'umd'
		},
		plugins: getBaseRollupPlugins()
	},
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: {
			file: `${distPath}/jsx-dev-runtime.js`,
			name: 'jsx-dev-runtime.js',
			format: 'umd'
		},
		plugins: getBaseRollupPlugins()
	}
];
