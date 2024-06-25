import AnimatedText from "./AnimateText";
import ScrollRevealText from "./ScrollRevelText";

const About = async () => {
    return (
        <div className="h-lvh pt-44 p-10 z-10 space-y-8 lg:space-y-16 m-auto max-w-7xl w-full">
            <div>
                <div>About</div>
                <div className="line border-t-2 border-t-gray-400 p-5"></div>
            </div>
            <div>
                <AnimatedText className="text-3xl lg:text-7xl font-bold max-w-4xl" text="I build and design" />
                <AnimatedText className="text-3xl lg:text-7xl font-bold max-w-4xl" text="my future" />
            </div>
            <div className="m-auto max-w-6xl w-full text-xl  lg:text-2xl space-y-2 lg:space-y-5 flex flex-col">
                <ScrollRevealText>
                    I&apos;m Ankan, a front-end developer with a background in graphic design. I specialize in crafting visually appealing and functional web experiences, emphasizing user experience and meticulous attention to detail. Additionally, I am a curious individual, constantly exploring new skills and interests.
                </ScrollRevealText>

                <ScrollRevealText>
                    When I&apos;m not coding, I am a passionate traveler who enjoys discovering new cultures and experimenting with different flavors. I keep up with the latest industry trends and technologies, bringing fresh ideas and efficient solutions to every project, consistently delivering high-quality results.
                </ScrollRevealText>

            </div>
        </div>
    )
}


export default About;