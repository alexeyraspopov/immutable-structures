import multiEntry from 'rollup-plugin-multi-entry';

export default {
  input: 'modules/*.js',
  output: [
    {
      file: 'build/bundle.js',
      format: 'cjs',
    },
    {
      file: 'build/bundle.module.js',
      format: 'esm',
    },
  ],
  plugins: [multiEntry()],
};
