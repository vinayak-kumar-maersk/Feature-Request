import React , {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import styles from '@/styles/EventItem.module.css';
import { Events } from '@styles/Event.styled';
import { Button, Card, CardHeader, IconButton } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';
 import { Star } from '@material-ui/icons';
 import { API_URL } from '../config';
export default function EventItem1({evt}) {
  
  
  return (
        <Events>
        <Card Container spacing = {5}>
         <div>
          <CardHeader 
              
          
                
          title = {evt.name} subheader={`${evt.date} at ${evt.time} `} style={{color:"#0000FF"}}/>
          
           <CardContent>
          <Typography >
            {evt.slug}
          </Typography>
        </CardContent>
        
          
    </div>
    </Card>
    </Events>  
  );
}
