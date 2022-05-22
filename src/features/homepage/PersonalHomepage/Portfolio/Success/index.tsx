import { useAppSelector } from '../../../hooks';
import { Article, Description, Header, Link, Links, Section } from './styled';

const Success = () => {
  const repositories = useAppSelector(
    (state) => state.personalHomepage.repositories
  );
  const demo = `https://wojciechbylica.github.io/`;

  return (
    <Section>
      {repositories &&
        repositories.map((repo) => (
          <Article key={repo.id}>
            <Header>{repo.name}</Header>
            <Description>{repo.description}</Description>
            <Links>
              Demo:{' '}
              <Link
                href={`${demo}${repo.name}`}
                target="_blank"
                rel="noreferrer noopener"
              >{`${demo}${repo.name}`}</Link>
            </Links>
            <Links>
              Repo:{' '}
              <Link
                href={repo.clone_url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {repo.clone_url}
              </Link>
            </Links>
          </Article>
        ))}
    </Section>
  );
};

export default Success;
