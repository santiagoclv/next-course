import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetail({ meetups }) {
    return (
        <MeetupDetail meetup={meetup} />
    )
}

// Useful to STATIC generate the diferent values that in this example "meetupId" could take.
export async function getStaticPaths(context) {
  // You can run server things here or fetch apis.
  return {
    paths: [
        {
            params: {
                meetupId: 'm1'
            }
        },
        {
            params: {
                meetupId: 'm1'
            }
        }
    ],
    fallback: true // If true, Next.js will try to generate this page Dynamically if not will redirect to 404.
  }
}

// Useful to pass props to STATICS web pages components from async sources.
export async function getStaticProps(context) {
  // You can run server things here or fetch apis.
  return {
    props: {
      meetup: { id: '123' }
    },
    revalidate: 1 // This parameter recreate the page again in the server every 1 second
  }
}