import Layout from "@/components/Layout";
import { API_URL } from "../config/index";
import React,{useState} from 'react';
import EventItem from "@/components/EventItem";
// import Link from "next/link";
//import styles from '@/styles/EventItem.module.css'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { Card } from "@material-ui/core";
import { CardContent } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Select } from "@anchor/react-components/dist/lib/components";
import { TextField } from "@material-ui/core";
import { CenterFocusStrong, SearchOutlined } from "@material-ui/icons";
import { InputAdornment } from "@material-ui/core";
import EventItem1 from "@/components/EventItem1";
import ButtonDesign from "@/components/AlteredDesign";
import { Pagination } from "@anchor/react-components/dist/lib/components";


import SharedCard from "@/components/SharedCard";
import ShowFilter from "@/components/ShowFilter";
import ShowBlogs from "@/components/ShowBlogs";
import dynamic from "next/dynamic";
// const useMediaQuery = dynamic(()=>import("@/components/useMediaQuery"),{ssr:false});
import useMediaQuery from "@/components/useMediaQuery";
import Media from "react-media";
import { RightSide,FontSize ,Space,SpaceTopLiked,ButtonRight,PSpacing} from "@styles/Event.styled";
export default function HomePage({events}) {
  const [show,setShow]=useState(true);
  // console.log(events);
  
  const matches = useMediaQuery( "(max-width: 968px)" );
  return (
    <Layout>
      <Container spacing = {3}>
      <Card>
      <ButtonRight>
          <ButtonDesign/>
          </ButtonRight>
          
          {matches ? <ShowFilter/>:<ShowBlogs/>}     
           
      <CardContent>
      <p>Ideas (98)</p>
      
        </CardContent> 
      </Card>
      
        <Grid container spacing = {14} direction="row" justify="flex-start" alignItems="flex-start">    
            {events.map((evt)=>(
                    <Grid key = {evt.id} xs = {12} sm={10} md = {8} lg={8} evt = {evt}>
                   <EventItem key = {evt.id} evt = {evt} />
                   </Grid>
                   ))}
         
        <RightSide >
          <FontSize>
            <p>Idea Status</p>
            </FontSize>
           
          <Space>  
            <Card Container spacing = {3}>
            <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
            <PSpacing>
              <p>50 New</p>
              </PSpacing>
            </Grid> 
              
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>11 Investigation</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>2 In Progress</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>4 Needs more info</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>6  Completed</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>1  Duplicate</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <Space>
            <Card Container spacing = {3}>
              <Grid container spacing = {3} direction="row" justify="flex-start" alignItems="flex-start" xs = {12} md = {6} lg={8}>
              <PSpacing>
              <p>6  Not Planned</p>
              </PSpacing>
              
              </Grid>
            </Card>
            </Space>
            <FontSize>
            <p>Top Liked Ideas</p>
            </FontSize>
            <SpaceTopLiked>
            <Grid container spacing = {8} direction="row" justify="flex-start" alignItems="flex-start">  
             
            {events.map((evt)=>(
                    <Grid key = {evt.id} xs = {12} sm={10} md = {10} lg={8} evt = {evt}>
                   <EventItem1 key = {evt.id} evt = {evt} />
                   </Grid>
                   ))}
             </Grid>
            </SpaceTopLiked>
            <SharedCard/>    
      </RightSide > 
    
        
      </Grid>
      <Pagination currentPage={1} onPageChange={function noRefCheck(){}} pageCount={20} totalItems={1000}/>
      </Container>
      
      
    </Layout>
  );
}

export async function getStaticProps(){
    const res = await fetch(`${API_URL}/api/event`)
    const events = await res.json()
   // console.log(events)//this will give on the server side that is here
   console.log(events)
    return{
      props:{events:events.slice(0,5)},
      revalidate:1,
    }
}

// {events.length > 0 && (
//   <Link href = '/events'>
//     <a className={styles.btn}>View All Events</a>
//   </Link>
// )
// }

// {events.map((evt)=>(
//   <Card1 key = {evt.id} evt = {evt} slug={evt.slug} />))}