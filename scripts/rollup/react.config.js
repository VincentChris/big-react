import { resolvePkgPath, getPackageJson, getBaseRollPlugins } from './utils';

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
		plugins: getBaseRollPlugins()
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
