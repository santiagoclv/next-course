import MeetupList from '../components/meetups/MeetupList';

const meetups = [
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

export default function Home() {
  return (
    <MeetupList meetups={meetups} />
  );
};
