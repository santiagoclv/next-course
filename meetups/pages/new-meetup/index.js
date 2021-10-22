import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetup() {
    const router = useRouter();

    const addNewMeetup = async (data) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);

        router.push('/');
    }

    return (
        <NewMeetupForm onAddMeetup={addNewMeetup} />
    );
}
