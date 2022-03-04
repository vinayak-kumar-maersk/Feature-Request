import React from 'react';
import { Card } from '@material-ui/core';
import { API_URL } from "@/config/index";
import { CardHeader } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import EventItem from '../components/EventItem';
function Card1({events}) {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader title = {events.name} subheader = {events.time} />
     <CardContent>
       <Typography variant="body2">
         {events.slug}
       </Typography>
     </CardContent>
     </Card>
    </div>
  );
}

export default Card1;




{/* <Card>             
            <CardContent>
              <Typography>
              {events.length === 0 && <h3>No events to show</h3>}
                  {events.map((evt)=>(
                   <EventItem key = {evt.id} evt = {evt} />
                   
                 ))}
              </Typography>
            </CardContent>
      </Card> */}