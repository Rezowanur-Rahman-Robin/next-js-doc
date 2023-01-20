import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';


export default function Home({allPostsData}) {
 //console.log(allPostsData)
  return (
    <Layout home >
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {
      //   <section className={utilStyles.headingMd}>
      //   <h1 className="text-sm text-slate-700" >I am a student of CSE.</h1>
      //   <p>
      //     (This is a sample website - you’ll be building a site like this on{' '}
      //   </p>
      //     <Alert type='success'>
      //       <h4>Alert Success</h4>
      //     </Alert>
      //     <Alert type='error'>
      //       <h4>Alert Error</h4>
      //     </Alert>
 
      // </section>
      }

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blog</h2>
  
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>{title}</Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
          </li>
        ))}
      </ul>
    </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

