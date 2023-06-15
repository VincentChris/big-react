import { resolvePkgPath, getPackageJson, getBaseRollPlugins } from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const { module, name } = getPackageJson('react');
const reactPkgPath = resolvePkgPath(name);
const reactPkgDisPath = resolvePkgPath(name, true);

export default [
	//react
	{
		input: `${reactPkgPath}/${module}`,
		output: {
			file: `${reactPkgDisPath}/index.js`,
			name: 'index.js',
			format: 'umd'
		},
		plugins: [
			...getBaseRollPlugins(),
			generatePackageJson({
				inputFolder: reactPkgPath,
				outputFolder: reactPkgDisPath,
				baseContents: (pkg) => {
					const { name, description, version } = pkg;
					return {
						name,
						description,
						main: 'index.js',
						version
					};
				}
			})
		]
	},
	{
		input: `${reactPkgPath}/src/jsx.ts`,
		output: [
			// jsx-dev-runtime
			{
				file: `${reactPkgDisPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				format: 'umd'
			},
			// jsx-runtime
			{
				file: `${reactPkgDisPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				format: 'umd'
			}
		],
		plugins: getBaseRollPlugins()
	}
];
