import { RefObject } from "react";
import { TextInput, TextInputProps } from "react-native";

import { Container } from "./styles";

type CustomTextInputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>;
}

export function Input({ inputRef, ...otherProps }: CustomTextInputProps) {
  return (
    <Container ref={inputRef} {...otherProps} />
  )
}
