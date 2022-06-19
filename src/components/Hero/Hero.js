import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Manish Pathak <br />
          I'm Web Developer
        </SectionTitle>
        <SectionText>
          I am currently looking to secure a Front-end Developer position to
          utilize my strong problem solving skills and front-end technology
          knowledge.
        </SectionText>

        <a
          style={{ color: 'white' }}
          href='../images/Resume.pdf'
          target='_blank'
        >
          <Button>Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
