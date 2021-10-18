import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';

import { IoPersonSharp } from '@react-icons/all-files/io5/IoPersonSharp';
import { IoLockClosed } from '@react-icons/all-files/io5/IoLockClosed';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation(`login`);

  return (
    <>
      <Head>
        <title>MNC | {t(`pagetitle`)}</title>
      </Head>
      <div className="flex justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container sm:mt-40 mt-24 my-auto max-w-md border-2 border-gray-200 p-3 bg-white dark:bg-gray-700 dark:border-gray-700">
          <div className="text-center my-6">
            <Image src="/logo_transparent.png" width="100%" height="100%" />
            <h1 className="text-3x1 font-semibold text-gray-700 dark:text-gray-300">
              {t(`headersignin`)}
            </h1>
            <p className="text-gray-500 dark:text-gray-300">
              {t(`headertext`)}
            </p>
          </div>
          <div className="m-6">
            <form className="mb-4">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  {t(`emailadress`)}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t(`youremailadress`)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-transparent dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    {t(`password`)}
                  </label>
                  <a
                    href="#!"
                    className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    {t(`forgotpassword`)}
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={t(`yourpassword`)}
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-transparent dark:focus:border-gray-500"
                />
              </div>
              <div className="mb-6">
                <button
                  type="button"
                  className="w-full px-3 py-4 text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none duration-100 ease-in-outbg-blue-700"
                >
                  {t(`signinbutton`)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`, `login`])),
  },
});

export default Home;
