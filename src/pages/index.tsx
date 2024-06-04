import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import Head from "next/head";

const Home = () => {
  const projects = [
    {
      slug: 'project-1',
      name: 'Project 1',
      image: {
        url: 'https://avatars.githubusercontent.com/u/7525670?v=4',
        alt: 'Breve descrição sobre a imagem'
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Home | Cix</title>
        <meta name="description" content="Sou um dev junior full stack" />
      </Head>
      <div className="py-12 px-6 md:pdx-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </>
  );
}
export default Home;
