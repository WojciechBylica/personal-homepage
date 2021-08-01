import { FooterDescription, FooterIntroduction, FooterLink, GitHubIcon } from "./styled";
import { email } from "../email";



const Footer = () => (
    <section>
        <FooterIntroduction>Let's talk</FooterIntroduction>
        <FooterLink href={`mailto:${email}`}>{email}</FooterLink>
        <FooterDescription>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
        </FooterDescription>
        <a href="https://github.com/WojciechBylica"><GitHubIcon /></a>
    </section>
);

export default Footer;