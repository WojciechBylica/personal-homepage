import Header from './Header';
import { experience, nextSkillsList, skillsList } from './Skills/skills';
import Skills from './Skills';
import { Wrapper } from './Wrapper';
import Footer from './Footer';
import Portfolio from './Portfolio';

export const PersonalHomepage = () => (
  <Wrapper>
    <Header />
    <main>
      <Skills header="My commercial experience📈" skills={experience} />

      <Skills header="My skillset includes 🛠" skills={skillsList} />

      <Skills header="What I want to learn more 🚀" skills={nextSkillsList} />

      <Portfolio />
    </main>
    <Footer />
  </Wrapper>
);
