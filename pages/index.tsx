import style from "../styles/Style.module.css";
import Layout from "../layouts/layout";

// async function GetQuote() {
//   const data = await fetch("https://api.quotable.io/random");
//   const d: {
//     content: string;
//   } = data.json() as unknown as { content: string };
//   return <i>{d.content}</i>;
// }

// TODO make this date fetching through some external API
function ageCal() {
  const yer = Number(Date().slice(11, 16));
  const myAge = 2004;
  return yer - myAge;
}


const techIUse = `
VIM, LINUX, GNOME, TYPESCRIPT, REACT, nextjs, wayland,
lazygit, markdown, git
`.toUpperCase();

const bullshit = ` 
Hello Friend, welcome to my personal website. My name is Ankan Roy and I am ${ageCal()} 
years old. I am from India and I am a computer science graduate. In my free time
, I enjoy exploring new software and learning about different cultures. This 
website is a place where I can express myself freely and share my thoughts and 
experiences without any censorship or manipulation. I hope you find it enjoyable 
and informative
`;

const bullshit2 = `
This place is home for all my psychological dysfunctioning.
A place where I am in control, with no censorship or manupilation.
A place where my words don't get mixed up with noise.
`;

const bullshit3 = `
As a man of culture, I am a big fan of cross play. However, due to financial
constraints, I have not been able to purchase any cross play items. If you can
help me secure an internship, I would be happy to offer you early access to my
cross play OnlyFans account as a thank you. Please note that I am just an average
guy with slightly above average PP and I do not consider myself sexy.
`;

const whatDoIlike = ` Anime, Manga, Manhwa, Coding, Politics
`.toUpperCase();

const bestMovies = ` Super 30, Dangal
`.toUpperCase();

const best_TV_show = ` Silicon Valley
`.toUpperCase();

const games = ` clash of Clan, pubgm
`.toUpperCase();

const best_Anime = ` Attack on Titan, Demon Slayer
`.toUpperCase();

export default function Home(props: {}) {
  return (
    <>
      <div className={`${style.padding}`}>
        <div>
          <p>{bullshit}</p>
          <i>{bullshit2}</i>
          <p>{bullshit3}</p>
        </div>
        <table>
          <tbody>
            <tr>
              <th className={style.neonText}>Q</th>
              <th className={style.neonText}>Ans</th>
            </tr>
            <tr>
              <td> Tech </td>
              <td>{techIUse}</td>
            </tr>
            <tr>
              <td> Hobby </td>
              <td>{whatDoIlike}</td>
            </tr>
            <tr>
              <td> Movies </td>
              <td>{bestMovies}</td>
            </tr>
            <tr>
              <td> TV </td>
              <td>{best_TV_show}</td>
            </tr>
            <tr>
              <td> Games </td>
              <td>{games}</td>
            </tr>
            <tr>
              <td> Anime </td>
              <td>{best_Anime}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
