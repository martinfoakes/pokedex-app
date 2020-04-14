import React from "react";
import ProffOak from "../../images/proff-oak.png";

import { IntroContainer, ProfessorImg, IntroText } from "./styles/styles";

const LandingIntroSection = () => (
  <IntroContainer>
    <h2>{"Online Pokédex Explorer | Generation I"}</h2>
    <ProfessorImg src={ProffOak} alt="Professor Oak" />
    <IntroText>
      {"First conceived by video game designer and director "}
      <a
        href="https://en.wikipedia.org/wiki/Satoshi_Tajiri"
        rel="noreferrer noopener"
        target="_blank"
      >
        {"Satoshi Tajiri"}
      </a>
      {", the "}
      <a
        href="https://en.wikipedia.org/wiki/Pok%C3%A9mon"
        rel="noreferrer noopener"
        target="_blank"
      >
        {"Pokémon franchise"}
      </a>
      {" was first created in 1995, with the first games "}
      <a
        href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_Red_and_Blue"
        rel="noreferrer noopener"
        target="_blank"
      >
        {"Pokémon Red and Blue"}
      </a>
      {", being released in February 1996."}
    </IntroText>
    <IntroText>
      {
        "The first generation (Generation I) of the Pokémon franchise featured the original 151 fictional species of creatures. The following site details these 151 Pokémon, from the first Pokémon #001 Bulbasaur, to the last, #151 Mew."
      }
    </IntroText>
    <IntroText>
      {
        "Through the links above, you can search for specific Pokémon or view them all in order of their National Pokédex number"
      }
    </IntroText>
  </IntroContainer>
);

export default LandingIntroSection;
