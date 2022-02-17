import {
  FooterDescription,
  FooterIntroduction,
  FooterLink,
  GitHubIcon,
  LinkedInIcon,
  StyledLink,
} from './styled';
import { email } from '../email';
import { gitHub } from '../gitHub';
import { linkedIn } from '../linkedIn';

const Footer = () => (
  <footer>
    <FooterIntroduction>Let's talk</FooterIntroduction>
    <FooterLink href={`mailto:${email}`}>{email}</FooterLink>
    <FooterDescription>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me
    </FooterDescription>
    <div>
      <StyledLink href={gitHub} rel="noreferrer noopener" target="_blank">
        <GitHubIcon />
      </StyledLink>
      <StyledLink href={linkedIn} rel="noreferrer noopener" target="_blank">
        <LinkedInIcon />
      </StyledLink>
    </div>
  </footer>
);

export default Footer;
