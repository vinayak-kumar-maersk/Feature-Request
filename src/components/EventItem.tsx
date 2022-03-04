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
import { Upvote } from '@styles/Event.styled';
export default function EventItem({evt}) {
  const [value, setValue] = useState(0);
  
  return (
        <Events>
        <Card Container spacing = {2}>
         <div>
          <CardHeader 
              action={
                
                <IconButton>
                  
                    <ThumbUp onClick={() => setValue((value + 1))}>Up Vote</ThumbUp>
                    <p>{value}</p>  
                </IconButton>
                
              }
          
                
          title = {evt.name} subheader={`${evt.date} at ${evt.time} `} style={{color:"#0000FF"}}/>
          <Upvote>
          <Grid  container item
              direction="row"
              alignItems="flex-end"
              justify="flex-end" xs = {12}>     
          
          <a onClick={() => setValue((value + 1))}>Add Upvote</a>
          
      </Grid>
      </Upvote>
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

{/* <div className={styles.link}>
          <Link href = {`/events/${evt.slug}`}>
            <a className={styles.btn}>Details</a>
          </Link>

        </div> */}