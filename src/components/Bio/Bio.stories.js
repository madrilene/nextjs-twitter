import React from "react";

import Bio from "./Bio";

export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headshot="https://pbs.twimg.com/profile_images/1303644762067664901/iHKD1qSG_400x400.jpg"
    name="Lene Saile"
    tagline="Desarrolladora web en Madrid"
    role="Más sobre mi en www.lenesaile.com"
  />
);
export const Default = Template.bind({});
