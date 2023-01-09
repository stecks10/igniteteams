import { TouchableHighlightProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styled';

type Props = TouchableHighlightProps & {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}