import React from 'react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import { AxisButton } from '../components/Axis_button';
import { theme1, theme2 } from '../theme';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

export default {
  title: 'Axis Components/Buttons',
  component: AxisButton,
  //decorators: [withThemes(null, [theme1, theme2], { providerFn })],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// const label = 'BUTTONTEXT';
// export const AxisStorybook = () => <AxisButton label={label} />;

// AxisStorybook.story = {
//   name: 'AxisButton',
// };

const Template = args => <AxisButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
