import React from 'react';
//import {Img} from "./../Projects/ProjectsStyles";
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { Img, LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      <p>Mike Marambio</p>
    </SectionTitle>
    <SectionText>
      <Img src = "/images/hero.png"/>
      
      <p>Welcome to my site! <br/>
      My name is Mike Marambio. I'm currently studying Computer Science at the University of Utah, doing Research in the Visual Perception and Spatial Cognition lab under Professor Jeanine Stefanucci on topics of Virtual Reality and Mixed Reality with a focus on Mixed Reality.
      <br/>
      <br/>

      To learn more about me please scroll down! :D
      
      </p>
    </SectionText>
  </LeftSection>
</Section>
);

export default Hero;