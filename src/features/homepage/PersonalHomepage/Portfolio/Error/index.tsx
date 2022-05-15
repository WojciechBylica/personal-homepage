import { ButtonLink } from '../../ButtonLink';
import { gitHub } from '../../gitHub';
import { DangerIcon, ErrorArticle, Header, Paragraph } from './styled';

const Error = () => (
  <ErrorArticle>
    <DangerIcon />
    <Header>Ooops! Something went wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Paragraph>
    <ButtonLink href={gitHub} rel="noreferrer noopener" target="_blank">
      Go to GitHub
    </ButtonLink>
  </ErrorArticle>
);

export default Error;
