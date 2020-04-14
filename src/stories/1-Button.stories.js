import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { DefaultBtn } from "Ncontracts.Common.UI";

export default {
  title: 'Button',
  component: Button,
};

export const SmallestButton = () => <DefaultBtn onClick={action('button so tiny')} className="btn--smallest">Test Button</DefaultBtn>
export const SmallerButton = () => <DefaultBtn onClick={action('button smol')} className="btn--smaller">Test Button</DefaultBtn>
export const BigButton = () => <DefaultBtn onClick={action('button woah')} className="btn--big">Test Button</DefaultBtn>
export const FullWidthButton = () => <DefaultBtn onClick={action('button as far as the eye can see')} className="btn--full-width">Test Button</DefaultBtn>
export const BaseButton = () => <DefaultBtn onClick={action('button basic plus')} className="btn--base">Test Button</DefaultBtn>
export const SolidButton = () => <DefaultBtn onClick={action('button opaque')} className="btn--solid">Test Button</DefaultBtn>
export const DestructiveSolidButton = () => <DefaultBtn onClick={action('button go boom')} className="btn--destructive-solid">Test Button</DefaultBtn>
export const BrandButton = () => <DefaultBtn onClick={action('button is on brand')} className="btn--brand">Test Button</DefaultBtn>
export const DestructiveButton = () => <DefaultBtn onClick={action('button badda boom')} className="btn--desctructive">Test Button</DefaultBtn>
export const SuccessSolidButton = () => <DefaultBtn onClick={action('button hooray')} className="btn--success-solid">Test Button</DefaultBtn>
export const InverseBaseButton = () => <DefaultBtn onClick={action('button inverted')} className="btn--inverse-base">Test Button</DefaultBtn>
