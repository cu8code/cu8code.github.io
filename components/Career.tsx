import { FaExternalLinkAlt } from "react-icons/fa";
import ScrollRevealText from "./ScrollRevelText";
import Image from "next/image";
import cashCowLabsPng from "@/assets/cashcowlabs.png"
import buxr from "@/assets/buxr.png"


const Career = () => {
    return (
        <div className="pt-40 p-2 lg:p-10 z-10 space-y-8 lg:space-y-16 m-auto max-w-7xl w-full">
            <div>
                <div>Career</div>
                <div className="line border-t-2 border-t-gray-400 p-5"></div>
            </div>

            <div className="space-y-28">
                <ScrollRevealText>
                    <div className="flex flec-col gap-2 text-2xl lg:text-4xl">
                        <a href="https://www.cashcowlabs.io/" className=" font-bold max-w-4xl">Cash Cow Labs</a>
                        <FaExternalLinkAlt className="font-bold max-w-4xl" />
                    </div>
                    <div className="flex flex-col lg:flex-row w-full h-full gap-5 mt-10">
                        <Image src={cashCowLabsPng} width={600} height={400} className="flex object-cover m-auto shadow-2xl" alt="Code Runner" />
                        <div className="grid place-items-center p-2 text-xl overflow-hidden">
                           {`I worked with top 1% of indian freelacer and designer to create a new page for ther startup which focus on generating value for advertizer and marketer using llm content generation, with specilized pipelines`}
                        </div>
                    </div>
                </ScrollRevealText>

                <ScrollRevealText>
                <div className="flex flec-col gap-2 text-2xl lg:text-4xl">
                        <a href="https://x.com/buxrgames" className="font-bold max-w-4xl">Buxr</a>
                        <FaExternalLinkAlt className="font-bold max-w-4xl" />
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5 mt-10">
                        <div className="grid place-items-center p-2 text-xl overflow-hidden">
                            A startup focus on making games, that tell a story
                        </div>
                        <Image src={buxr} width={600} height={400} className="flex object-cover m-auto shadow-2xl" alt="Code Runner" />
                    </div>
                </ScrollRevealText>
            </div>

        </div>
    )
}

export default Career;
