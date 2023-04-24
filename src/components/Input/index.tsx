import { TextInputProps } from "react-native";

import { Container } from "./styles";

export function Input({ ...otherProps }: TextInputProps) {
  return (
    <Container {...otherProps} />
  )
}
