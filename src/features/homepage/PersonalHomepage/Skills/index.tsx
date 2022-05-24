import { Header, Item, List, Section, Bullet } from './styled';

interface ISkillsProps {
  header: React.ReactNode;
  skills: string[];
}

const Skills = ({ header, skills }: ISkillsProps) => (
  <Section>
    <Header>{header}</Header>
    <List>
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
