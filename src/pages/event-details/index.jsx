import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import EventDetailsMain from '../../components/event-details';
import { event_data } from '../../data';

const event = event_data[0]

const EventDetails = () => {
    return (
        <Wrapper>
            <SEO pageTitle={'Event Details'} />
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default EventDetails;