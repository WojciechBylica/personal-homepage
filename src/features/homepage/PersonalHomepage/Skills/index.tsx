import { Header, Item, List, Section, Bullet } from './styled';

interface ISkillsProps {
  header: React.ReactNode;
  skills: string[];
  oneColumn?: boolean;
}

const Skills = ({ header, skills, oneColumn }: ISkillsProps) => (
  <Section>
    <Header>{header}</Header>
    <List oneColumn={oneColumn}>
      {skills.map((skill) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);

export default Skills;
