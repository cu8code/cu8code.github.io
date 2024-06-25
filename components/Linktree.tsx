import { FaGit, FaLinkedinIn } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

const Linktree = () => {
    return (
        <div id="linktree" className="min-h-[40vh] flex flex-col md:flex-row justify-center items-center gap-10 text-4xl">
            <a href="http://"><FaLinkedinIn /></a>
            <a href="http://"><FaYoutube /></a>
            <a href="http://"><FaGithub/></a>
            <a href="http://"><FaInstagram /></a>
            <a href="http://"><FaTwitter /></a>
        </div>
    )
}

export default Linktree