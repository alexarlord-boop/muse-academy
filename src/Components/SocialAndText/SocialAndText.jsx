import Spacer from "../Utility/Spacer";
import ParagraphText from "../Utility/ParagraphText";
import IconSet from "./IconSet";

export default function SocialAndText() {
    return (
        <div className="SocialAndText">
            <IconSet/>
            <Spacer height="24px"/>
            <ParagraphText
                text="You're not just a student - you're part of a vibrant community of like-minded individuals united by a passion for frontend development. Collaborate, innovate, and grow alongside fellow learners and industry professionals as you embark on this exciting journey together."/>
        </div>
    );
}
