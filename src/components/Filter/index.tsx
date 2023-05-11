import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  FilterStyleProps,
  Title,
} from './styles';

type FilterProps = TouchableOpacityProps & FilterStyleProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...othersProps }: FilterProps) {
  return (
    <Container
      isActive={isActive}
      {...othersProps}
    >
      <Title>{title}</Title>
    </Container>
  )
}
