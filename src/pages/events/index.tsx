import Layout from "@/components/Layout";
import { API_URL } from "src/config";
import React from 'react';
import EventItem from "@/components/EventItem";
import Link from "next/link";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
export default function EventPage({events}) {
  console.log(events)//this will give the console log statements on the client side
  return (
    <Layout>
      <h1>All</h1>
      <Container>
        <Grid container>
      {events.map((evt)=>(
                    <Grid key = {evt.id} xs = {12} md = {6} lg={8} evt = {evt}>
                   <EventItem key = {evt.id} evt = {evt} />
                   </Grid>
                 ))}
      </Grid>
      </Container>
    </Layout>
  );
}


// export async function getServerSideProps(){
//   const res = await fetch(`${API_URL}/api/event`)
//   const events = await res.json()
//  // console.log(events)//this will give on the server side that is here
//  console.log(events)
//   return{
//     props:{events},
//   }
// }

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/event`)
  const events = await res.json()
 // console.log(events)//this will give on the server side that is here
 console.log(events)
  return{
    props:{events},
    revalidate:1,
  }
}