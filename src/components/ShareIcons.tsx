import React from 'react';
import { FacebookShareButton } from 'react-share';
import { FacebookIcon } from 'react-share';
import { TwitterShareButton } from 'react-share';
import { TwitterIcon } from 'react-share';
import { LinkedinShareButton } from 'react-share';
import { LinkedinIcon } from 'react-share';
const ShareIcons = () => {
  return (
    <div>
        <p>Share</p>
      <FacebookShareButton url = "https://www.facebook.com/" hashtag='#React'><FacebookIcon logoFillColor="white" round={true}></FacebookIcon></FacebookShareButton>
      <LinkedinShareButton url = "https://www.linkedin.com/signup" hashtag='#React'><LinkedinIcon logoFillColor = "white" round={true}></LinkedinIcon></LinkedinShareButton>
      <TwitterShareButton url = "https://twitter.com/" hashtag="#React"><TwitterIcon logoFillColor="white" round = {true}></TwitterIcon></TwitterShareButton>
    </div>
  );
}

export default ShareIcons;
