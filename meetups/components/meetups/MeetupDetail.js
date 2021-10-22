import classes from './MeetupDetail.module.css';

function MeetupDetail( { meetup } ) {
  return (
    <section>
      <div className={classes.image}>
        <img src={meetup?.image} alt={meetup?.title} />
      </div>
      <div className={classes.content}>
        <h3>{meetup?.title}</h3>
        <address>{meetup?.address}</address>
        <p>{meetup?.description}</p>
      </div>
    </section>
  );
}



export default MeetupDetail;
