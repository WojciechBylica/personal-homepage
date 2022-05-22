import {
  StyledButton,
  StyledText,
  StyledSpan,
  IconWrapper,
  Icon,
  StyledSection,
} from './styled';
import { toggleTheme } from '../themeSlice';
import { useAppDispatch, useAppSelector } from '../../features/homepage/hooks';

const SwitchTheme = () => {
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);
  const dispatch = useAppDispatch();

  return (
    <StyledSection>
      <StyledButton onClick={() => dispatch(toggleTheme())}>
        <StyledText>dark mode {isDarkTheme ? 'on' : 'off'}</StyledText>

        <StyledSpan>
          <IconWrapper moveToRight={isDarkTheme}>
            <Icon />
          </IconWrapper>
        </StyledSpan>
      </StyledButton>
    </StyledSection>
  );
};

export default SwitchTheme;
