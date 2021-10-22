import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

const dummy_meetups = [
  {
    id: 'm1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    title: 'Puente 1',
    address: 'asdasdas'
  },
  {
    id: 'm2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    title: 'Puente 2',
    address: 'asdasdasd'
  },
  {
    id: 'm3',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png',
    title: 'Punte 3',
    address: 'asdasdasd'
  }
];

// Useful to pass props to DYNAMIC web pages components from async sources.
export async function getServerSideProps(context) {
  // fetch data from an API or server things like auth

  // As in an express server endpoints you could get request and response objects from "endpoints"
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: dummy_meetups
    }
  }
}

// Useful to pass props to STATICS web pages components from async sources.
// export async function getStaticProps(context) {
//   // You can run server things here or fetch apis or a Data Base
//   return {
//     props: {
//       meetups: dummy_meetups
//     },
//     revalidate: 1 // This parameter recreate the Home page again in the server every 1 second
//   }
// }

export default function Home({ meetups }) {
  return (
    <>
      <Head>
        <title>Meetups</title>
        <meta
          name="description"
          content="Description for this page that is the home of Meetups"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
};
