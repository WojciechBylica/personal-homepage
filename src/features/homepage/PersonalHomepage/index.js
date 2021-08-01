import Header from "./Header";
import { nextSkillsList, skillsList } from "./Skills/skills";
import Skills from "./Skills";
import { Wrapper } from "./Wrapper";
import Footer from "./Footer";



export const PersonalHomepage = () => (
    <Wrapper>
        <Header />
        <Skills
            header="My skillset includes 🛠"
            skills={skillsList}
        />
        <Skills 
        header="What I want to learn next 🚀"
        skills= {nextSkillsList}
        />
       <Footer />
    </Wrapper>
)