import React from 'react';
import { Router, useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { API_URL } from '@/config/index';
export default function EventPage({evt}) {
  const router = useRouter()
  console.log(router);
  return (
    <Layout>
      <h1>{evt.name}</h1>
      
    </Layout>
  );
}
export async function getStaticPaths(){
  const res = await fetch(`${API_URL}/api/event`)
  const events = await res.json()

  const paths = events.map(evt =>({
    params:{slug:evt.slug}
  }))
  return{
    paths,
    fallback:true,
  }
}

export async function getStaticProps({params:{slug}}){
  console.log(slug);
  const res = await fetch(`${API_URL}/api/event/${slug}`)
  const events = await res.json()

  return{
    props:{
      evt:events[0],
    },
    revalidate:1
  }
}