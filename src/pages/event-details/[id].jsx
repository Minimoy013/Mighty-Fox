import { useRouter } from 'next/router';
import React from 'react';
import SEO from '../../components/seo';
import { event_data } from '../../data';
import { Wrapper } from '../../layout';
import EventDetailsMain from '../../components/event-details';

const DynamicEventDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const event = event_data.find(item => Number(item.id) === Number(id))
    return (
        <Wrapper>
            <SEO pageTitle={'Event Details'} />
            <EventDetailsMain event={event} />
        </Wrapper>
    )
}

export default DynamicEventDetails;

export async function getStaticPaths() {
    const paths = event_data.map((event) => {
        return {
            params:{
                id:`${event.id}`
            }
        }
    })
    return {
      paths,
      fallback: false,
    }
  }

export async function getStaticProps(context) {
    return {
        props: {}
    }
}