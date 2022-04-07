import { useRouter } from 'next/router';

import Head from 'next/head'
import Navbar from './navbar';

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Cataline Baert - Developer and Teacher',
    description: `I've been coding and teaching web development for 2 years. Get in touch with me to know more.`,
    image: '/images/profile.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Cataline Baert" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@CatalineBaert" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  )
}
