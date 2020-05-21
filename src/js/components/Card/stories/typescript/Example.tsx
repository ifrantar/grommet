import React from 'react';
import { storiesOf } from '@storybook/react';
import isChromatic from 'storybook-chromatic/isChromatic';

import { Anchor, Box, Card, Grommet, Heading, Image, Paragraph } from 'grommet';
import { ThemeType } from 'grommet/themes';

const theme: ThemeType = {
  global: {
    font: {
      family: `Comic Sans MS, -apple-system,
         BlinkMacSystemFont, 
         "Segoe UI", 
         Roboto`,
    },
  },
  card: {
    elevation: 'none',
    background: 'light-2',
    header: {
      pad: '0px',
    },
    content: {
      pad: 'medium',
    },
    footer: {
      background: 'light-1',
      pad: 'medium',
    },
  },
};

const Example = () => (
  <Grommet theme={theme}>
    <Box pad="medium" align="start">
      <Card
        elevation="large"
        header={<Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />}
        footer={
          <Box align="end">
            <Anchor
              href="https://www.collinsdictionary.com/us/dictionary/english/bridge"
              label="Learn More"
            />
          </Box>
        }
      >
        <Heading level="2" margin={{ vertical: 'none' }}>
          Bridge
        </Heading>
        <Paragraph>
          A structure carrying a road, path, railroad, or canal across a river,
          ravine, road, railroad, or other obstacle.
        </Paragraph>
      </Card>
    </Box>
  </Grommet>
);

if (!isChromatic()) {
  storiesOf('Card', module).add('Typescript', () => <Example />);
}