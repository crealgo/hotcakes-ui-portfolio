import styled, {css} from 'styled-components';

type Props = {
	spacing?: [number, number];
};

export const Divider = styled.hr<Props>(({theme, spacing = [2.5, 1]}) => css`
	margin-block: ${theme.spacing(spacing[0])} ${theme.spacing(spacing[1])};
	border: solid 1px ${theme.color.slate[200]};
`);
