import Card from '../ui/Card';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
    </Card>
  );
}

export default MeetupDetail;
