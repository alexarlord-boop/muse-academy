import Spacer from "../Utility/Spacer";
import ParagraphText from "../Utility/ParagraphText";
import HeaderText from "../Utility/HeaderText";
import InviteForm from "./InviteForm";


export default function HeroSection() {
    return (
        <div className="HeroSection">
            <Spacer height="40px"/>
            <div className="HeroSectionContent">
                <HeaderText text='Muse Group Frontend Academy'/>

                <Spacer height="24px"/>

                <ParagraphText className="description"
                               text='Our academy offers a transformative learning experience designed to empower you with the skills and knowledge needed to succeed in the ever-evolving field of frontend development.'/>

                <Spacer height="24px"/>

                <div className="hero-img"></div>

                <Spacer height="24px"/>

                <ParagraphText className="question"
                               text="Are you ready to turn your passion for technology into a thriving career?"/>

                <Spacer height="24px"/>

                <InviteForm/>

                <Spacer height="40px"/>
            </div>
        </div>
    );
}