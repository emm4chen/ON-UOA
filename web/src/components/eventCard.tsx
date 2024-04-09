export interface EventCardProps{
    event: {
        name: string;
        date: Date;
        location: string;
        price: number;
        type: string;
        description: string;
    };
}

const EventCard = ({event}: EventCardProps) => {
    return(
        <div className="eventcard">
            <h1>{event.name}</h1>
            <h3>{event.date.toDateString()}</h3>
            <h3>{event.location}</h3>
            <h3>{event.price}</h3>
            <p>{event.type}</p>
            <p>{event.description}</p>
        </div>
    );
}

export default EventCard;
