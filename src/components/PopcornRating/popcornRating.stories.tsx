import { StoryFn, Meta } from "@storybook/react";
import PopcornRating from "./PopcornRating";

export default {
  title: "ReactComponentLibrary/Rating",
  component: PopcornRating,
} as Meta<typeof PopcornRating>;

const Template: StoryFn<typeof PopcornRating> = (args) => <PopcornRating {...args} />;

export const RatingTest = Template.bind({});
RatingTest.args = {
  title: "Default theme",
  theme: "primary",
  testIdPrefix: "rating",
};

export const RatingSecondary = Template.bind({});
RatingSecondary.args = {
  title: "Secondary theme",
  theme: "secondary",
  testIdPrefix: "rating",
};
