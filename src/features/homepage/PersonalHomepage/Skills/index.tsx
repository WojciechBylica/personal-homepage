import { Header, Item, List, Section, Bullet } from './styled';

interface ISkills {
    header: string,
    skills: string[]
  }

const Skills = ({ header, skills }:ISkills) => (
  <Section>
    <Header>{header}</Header>
    <List>
      {skills.map((skill:string) => (
        <Item key={skill}>
          <Bullet />
          {skill}
        </Item>
      ))}
    </List>
  </Section>
);

export default Skills;
