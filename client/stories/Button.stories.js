import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "handleClick" },
  },
};

const Template = (args) => <Button {...args} />;

//Story-1
export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

//Story-2
export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};

//Story-3
export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Small",
  size: "sm",
};

//Story-3
export const Normal = Template.bind({});
Normal.args = {
  backgroundColor: "green",
  label: "Normal",
  size: "md",
};

//Story-3
export const Big = Template.bind({});
Big.args = {
  backgroundColor: "blue",
  label: "Big",
  size: "lg",
};
