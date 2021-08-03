import { useSelector } from "react-redux";
import { selectRepositories } from "../../../personalHomepageSlice";
import { Article, Description, Header, Link, Links, Section } from "./styled";

const Success = () => {
    const repositories = useSelector(selectRepositories);

    return (
        <Section>
            {Object.keys(repositories).map(repo =>
                <Article key={repo}>
                    <Header>{repositories[repo].name}</Header>
                    <Description>{repositories[repo].description}</Description>
                    <Links>Demo: <Link href={repositories[repo].url} target="_blank" rel="noreferrer noopener">{repositories[repo].url}</Link></Links>
                    <Links>Repo: <Link href={repositories[repo].clone_url} target="_blank" rel="noreferrer noopener">{repositories[repo].clone_url}</Link></Links>
                </Article>
            )}
        </Section>
    );
};

export default Success;