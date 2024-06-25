import Image from "next/image";
import ScrollRevealText from "./ScrollRevelText";
import codeRunnerPng from "@/assets/code_runner.png"
import { FaExternalLinkAlt } from "react-icons/fa";


const Project = () => {
    return (
        <div className="pt-40 p-2 lg:p-10 z-10 space-y-8 lg:space-y-16 m-auto max-w-7xl w-full">
            <div>
                <div>Projects</div>
                <div className="line border-t-2 border-t-gray-400 p-5"></div>
            </div>

            <div className="space-y-28">
                <ScrollRevealText>
                    <div className="flex flec-col gap-2 text-2xl lg:text-4xl">
                        <a href="https://github.com/cu8code/Flang" className=" font-bold max-w-4xl">Flang</a>
                        <FaExternalLinkAlt className="font-bold max-w-4xl" />
                    </div>
                    <div className="flex flex-col lg:flex-row w-full h-full gap-5 mt-10">
                        <video className="m-auto" width="600" height="400" controls={false} preload="none" autoPlay={true} loop={true} muted={true} src="/flang.mp4" />
                        <div className="grid place-items-center p-2 text-xl overflow-hidden">
                            I created this fun programming language to gain a better understanding of how programming languages work. its very basic , as of writing this README it can
                        </div>
                    </div>
                </ScrollRevealText>

                <ScrollRevealText>
                    <div className="flex flec-col gap-2 text-2xl lg:text-4xl">
                        <a href="https://code-runner-tau.vercel.app/" className="font-bold max-w-4xl">Code Runer</a>
                        <FaExternalLinkAlt className="font-bold max-w-4xl" />
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row w-full h-full gap-5 mt-10">
                        <div className="grid place-items-center p-2 text-xl overflow-hidden">
                            A project that runs your code in a sandbox enviorment for quick testing and prototyping. The backend is build the REST architecture.
                        </div>
                        <Image src={codeRunnerPng} width={600} height={400} className="flex object-cover m-auto shadow-2xl" alt="Code Runner" />
                    </div>
                </ScrollRevealText>
            </div>

        </div>
    )
}


export default Project;