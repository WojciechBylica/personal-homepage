import {
  FooterDescription,
  FooterIntroduction,
  FooterLink,
  StyledLink,
} from './styled';
import { email } from '../email';
import { nanoid } from '@reduxjs/toolkit';
import { accounts } from './accounts';

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
      {accounts.map(({ account, icon, ariaLabel}) => (
        <StyledLink
          key={nanoid()}
          href={account}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={ariaLabel}
        >
          {icon}
        </StyledLink>
      ))}
    </div>
  </footer>
);

export default Footer;
