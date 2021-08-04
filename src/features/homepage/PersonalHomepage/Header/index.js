import { Wrapper, StyledImage, StyledWrapper, Introduction, Name, Description, StyledMessage } from "./styled";
import Image from "./wojciechBylica.png";
import SwitchTheme from "../../../../common/ThemeSwitcher";
import { email } from "../email";
import { ButtonLink } from "../ButtonLink";

const Header = () => (
    <header>
        <SwitchTheme />
        <Wrapper>
            <StyledImage src={Image} alt="Wojciech Bylica" />
            <StyledWrapper>
                <Introduction>This is</Introduction>
                <Name>Wojciech Bylica</Name>
                <Description>👨🏻‍💻 💻 I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.</Description>
                <ButtonLink href={`mailto:${email}`}><StyledMessage /><span>Hire Me</span></ButtonLink>
            </StyledWrapper>
        </Wrapper>
    </header>
);

export default Header;