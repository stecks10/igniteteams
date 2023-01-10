import { TouchableOpacityProps } from "react-native";

import { Container, Title, FilterStyledProps } from "./styles";

type Props = TouchableOpacityProps & FilterStyledProps & {
  title: string;
}

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive}>
      <Title>{title}</Title>
    </Container>
  )
}