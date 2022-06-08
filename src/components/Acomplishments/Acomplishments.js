import React from "react";

import { CircleProgress } from "react-gradient-progress";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const Acomplishments = () => (
  <Section>
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxNum>
          <CircleProgress
            percentage={90}
            strokeWidth={2}
            width={100}
            fontSize={20}
          />
        </BoxNum>
        <BoxText>HTML/CSS</BoxText>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxNum>
          <CircleProgress
            percentage={80}
            strokeWidth={2}
            width={100}
            fontSize={20}
          />
        </BoxNum>
        <BoxText>JavaScript</BoxText>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxNum>
          <CircleProgress
            percentage={70}
            strokeWidth={2}
            width={100}
            fontSize={20}
          />
        </BoxNum>
        <BoxText>ReactJs</BoxText>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxNum>
          <CircleProgress
            percentage={50}
            strokeWidth={2}
            width={100}
            fontSize={20}
          />
        </BoxNum>
        <BoxText>Node/Express</BoxText>
      </Box>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <BoxNum>
          <CircleProgress
            percentage={40}
            strokeWidth={2}
            width={100}
            fontSize={20}
          />
        </BoxNum>
        <BoxText>Expo Cli</BoxText>
      </Box>
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
