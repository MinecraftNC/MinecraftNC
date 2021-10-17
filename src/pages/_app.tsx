import { AppProps } from 'next/app';
import Router from 'next/router';

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import 'tailwindcss/tailwind.css';

import { appWithTranslation } from 'next-i18next';

Router.events.on(`routeChangeStart`, () => NProgress.start());
Router.events.on(`routeChangeComplete`, () => NProgress.done());
Router.events.on(`routeChangeError`, () => NProgress.done());

const MyApp = ({ Component, pageProps }: any) => <Component {...pageProps} />;

export default appWithTranslation(MyApp);
