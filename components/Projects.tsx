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
                        <video className="m-auto shadow-2xl" src="https://private-user-images.githubusercontent.com/109351887/224492244-29fdf99f-c4d1-4118-9bb4-c18524200bca.mp4?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzMjI4MTYsIm5iZiI6MTcxOTMyMjUxNiwicGF0aCI6Ii8xMDkzNTE4ODcvMjI0NDkyMjQ0LTI5ZmRmOTlmLWM0ZDEtNDExOC05YmI0LWMxODUyNDIwMGJjYS5tcDQ_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI1JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNVQxMzM1MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wNmY3ZjdkZmZmOGE3ZDc3ODBlNzYxMWFlYjUyMmVhYzJiMTJiYTRmYTI4OTg5NTNhNjEyZmJlYjU5Nzk1ODUzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.0KVBROFe1FkFt3ZPFHuwKsHR46DIauAwe_G4hCJGulQ" width={600} height={400} controls={false} autoPlay={true} loop={true} />
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
                            A project that runs your code in a sandbox enviorment for quick testing and prototyping
                        </div>
                        <Image src={codeRunnerPng} width={600} height={400} className="flex object-cover m-auto shadow-2xl" alt="Code Runner" />
                    </div>
                </ScrollRevealText>
            </div>

        </div>
    )
}


export default Project;