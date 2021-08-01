import { Wrapper, StyledImage, StyledWrapper, Introduction, Name, Description, StyledMessage, ButtonLink } from "./styled";
import Image from "./wojciechBylica.png";
import SwitchTheme from "../../../../common/SwitchTheme";


const Header = () => (
    <>
        <SwitchTheme />
        <Wrapper>
            <StyledImage src={Image} alt="Wojciech Bylica" />
            <StyledWrapper>
                <Introduction>This is</Introduction>
                <Name>Wojciech Bylica</Name>
                <Description>👨🏻‍💻 💻I’m a passionate Frontend Developer in love with React,currently looking for new job opportunities.</Description>
                <ButtonLink href={`mailto:"wojciechbylicaarts@gmail.com"`}><StyledMessage /><span>Hire Me</span></ButtonLink>
            </StyledWrapper>
        </Wrapper>

    </>

);

export default Header;