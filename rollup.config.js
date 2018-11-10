import postcss from 'rollup-plugin-postcss';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import {uglify} from 'rollup-plugin-uglify';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import url from "rollup-plugin-url"

const pkg = require(`${process.cwd()}/package.json`);
const env = process.env.NODE_ENV;
const dev = env !== 'production';


const globals = {

};

const external = [];

const input = 'src/index.js';

const plugins = [
    postcss({
        modules: true,
        plugins: [],
    }),
    nodeResolve(),
    babel({
        exclude: '**/node_modules/**',
    }),
    replace({
        'process.env.NODE_ENV': JSON.stringify(env),
    }),
    commonjs(),
    url({
        limit: 10 * 1024, // inline files < 10k, copy files > 10k
        include: ["**/*.svg"], // defaults to .svg, .png, .jpg and .gif files
        emitFiles: true // defaults to true
    }),
    dev && livereload('dist'),
    dev
    && serve({
        contentBase: ['dist'],
        historyApiFallback: true,
        port: 8080,
    }),
];

export default [
    {
        input,
        external,
        output: {
            file: pkg.browser,
            format: 'umd',
            name: pkg.browserName,
            globals,
        },
        plugins,
    },
    {
        input,
        external,
        output: {
            file: pkg.browser.replace('.js', '.min.js'),
            format: 'umd',
            name: pkg.browserName,
            globals,
        },
        plugins: [
            ...plugins,
            uglify({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false,
                },
            }),
        ],
    },
];
