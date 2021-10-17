import Button from "../components/Button/button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: { action: "handleClick" }
  }
}

const Template = (args) => <Button {...args} />

//Story-1
export const Soft = Template.bind({})
Soft.args = {
  children: "Press Me",
  appearance: "soft"
}

//Story-2
export const Danger = Template.bind({})
Danger.args = {
  children: "Press Me",
  appearance: "danger"
}

//Story-3
export const Link = Template.bind({})
Link.args = {
  children: "Press Me",
  appearance: "link"
}
