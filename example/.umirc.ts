import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [require.resolve('../lib')],
  translate:{
    path:"locales"
  },
});
