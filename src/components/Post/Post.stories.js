import React from "react";

import Post from "./Post";

export default {
  title: "Components/Post",
  component: Post,
};

const Template = () => (
  <Post
    content="Ich arbeite an Figma und mache eine neue Webseite die all meine
Tweets zeigt und noch ein paar Wörter damit s genug sind"
    date="14.03.2021"
  />
);

export const Default = Template.bind({});
