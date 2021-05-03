import { mainBlack, stateError } from 'app/themes/colors';
import styled from 'styled-components';

export const Bold = styled.span`
  font-weight: bold;
`;

export const Span = styled.span<{
  color?: string;
}>`
  color: ${props => props.color || mainBlack};
`;

export const Strong = styled(Span)`
  font-weight: bold;
`;

export const HeaderBig = styled(Strong)`
  font-size: 28px;
  line-height: 40px;
`;

export const Header = styled(Strong)`
  font-size: 22px;
  line-height: 25px;
`;

export const HeaderSmall = styled(Strong)`
  font-size: 18px;
  line-height: 24px;
`;

export const TextButton = styled(HeaderSmall)`
  font-size: 16px;
`;

export const Hint = styled(Span)`
  font-size: 12px;
  line-height: 16px;
`;

export const TextRegular = styled(Hint)<{ color?: string }>`
  font-size: 14px;
  color: ${props => props.color || mainBlack};
`;

export const TextRegularLittle = styled(TextRegular)`
  font-size: 10px;
`;

export const TextRegularStrong = styled(Strong)<{ color?: string }>`
  font-size: 14px;
  color: ${props => props.color || mainBlack};
`;

export const ErrorHint = styled(Hint)`
  color: ${stateError};
`;
