import Header from './Header';
import { nextSkillsList, skillsList } from './Skills/skills';
import Skills from './Skills';
import { Wrapper } from './Wrapper';
import Footer from './Footer';
import Portfolio from './Portfolio';

export const PersonalHomepage = () => (
  <Wrapper>
    <Header />
    <main>
      <Skills header="My skillset includes 🛠" skills={skillsList} />

      <Skills header="What I want to learn next 🚀" skills={nextSkillsList} />

      <Portfolio />
    </main>
    <Footer />
  </Wrapper>
);
