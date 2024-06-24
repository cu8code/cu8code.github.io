import AnimatedText from "./AnimateText";
import ScrollRevealText from "./ScrollRevelText";

const About = async () => {
    return (
        <div className="h-lvh pt-44 p-10 z-10 space-y-16">
            <div>
                <div>About</div>
                <div className="line border-t-2 border-t-gray-400 p-5"></div>
            </div>
            <AnimatedText className="text-7xl font-bold max-w-4xl" text="I build and design custom websites that are both playful and fun" />
            <div className="m-auto max-w-6xl w-full text-2xl space-y-5 flex flex-col">
                <ScrollRevealText>
                    I'm Ankan, a front-end developer with a background in graphic design. I specialize in crafting visually appealing and functional web experiences, emphasizing user experience and meticulous attention to detail. Additionally, I am a curious individual, constantly exploring new skills and interests.
                </ScrollRevealText>

                <ScrollRevealText>
                    When I'm not coding, I am a passionate traveler who enjoys discovering new cultures and experimenting with different flavors. I keep up with the latest industry trends and technologies, bringing fresh ideas and efficient solutions to every project, consistently delivering high-quality results.
                </ScrollRevealText>
                
            </div>
        </div>
    )
}


export default About;