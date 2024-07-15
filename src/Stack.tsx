'use client';

import styled, {css} from 'styled-components';

type Props = React.ComponentPropsWithoutRef<'div'> & {
	vertical?: boolean;
	gap?: number;
};

type RootProps = UnforwardProps<Pick<Props, 'vertical' | 'gap'>>;

const StackRoot = styled.div<RootProps>(props => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    gap: ${props.theme.spacing(props.$gap)};

    ${props.$vertical && css`
      display: grid;
      grid-template-columns: 1fr;
    `}
`);

export const Stack: React.FC<Props> = props => (
	<StackRoot $vertical={Boolean(props.vertical)} $gap={props.gap ?? 0.25}>
		{props.children}
	</StackRoot>
);
