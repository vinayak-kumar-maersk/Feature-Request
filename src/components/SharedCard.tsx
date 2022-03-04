import React from 'react';
import { Card } from '@anchor/react-components/dist/lib/components';
import { Shared } from '@styles/Event.styled';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { LinkedinShareButton } from 'react-share';
import { TwitterShareButton } from 'react-share';
import ShareIcons from './ShareIcons';
const SharedCard = () => {
  return (
    <div>
    <Shared>
      <Card cardContent =  {<ShareIcons/>} minHeight="100px" minWidth="340px"/>
          
      
    </Shared>
    </div>
  );
}

export default SharedCard;
