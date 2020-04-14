import React from 'react';
import { addDecorator } from '@storybook/react';
import "../node_modules/Ncontracts.Common.UI/dist/bundle.css";

addDecorator(story => (
  <>
    {story()}
  </>
));
