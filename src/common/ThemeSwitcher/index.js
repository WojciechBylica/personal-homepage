import {
  StyledButton,
  StyledText,
  StyledSpan,
  IconWrapper,
  Icon,
  StyledSection,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDarkTheme, toggleTheme } from '../themeSlice';

const SwitchTheme = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

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
