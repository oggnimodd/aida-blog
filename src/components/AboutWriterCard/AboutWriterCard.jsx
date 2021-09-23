import { AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import React from 'react';
import {
  CardWrapper, ImageWrapper, CardName, CardDescription, SocialLinks,
} from './AboutWriterCard.style';
import { AidaImage } from '../Wrapper/AidaImage';
import { SocialLink } from '../SocialLink/SocialLink.style';

const authorImage = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const AboutWriterCard = ({ horizontal }) => {
  return (
    <CardWrapper horizontal={horizontal}>
      <ImageWrapper>
        <AidaImage>
          <img
            src={authorImage}
            alt="Cool"
          />
        </AidaImage>
      </ImageWrapper>
      <CardName>Aida Jasmine</CardName>
      <CardDescription>Lorem ipsum dolor sit amet, cons ecte tur adipiscing elit, sed do mod tempor incididunt ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nesciunt.</CardDescription>
      <SocialLinks>
        <SocialLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/"
        >
          <AiFillLinkedin />
        </SocialLink>
        <SocialLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/"
        >
          <AiOutlineInstagram />
        </SocialLink>
        <SocialLink
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/"
        >
          <AiOutlineTwitter />
        </SocialLink>
      </SocialLinks>
    </CardWrapper>
  );
};

export default AboutWriterCard;
