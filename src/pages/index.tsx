import { AboutMe } from "@/components/Home/AboutMe";
import { Projects } from "@/components/Home/Projects";
import { Project, AboutMe as TAboutMe } from "@/types/Home";
import { GetStaticProps } from "next";
import Head from "next/head";

const githubGist = 'https://gist.githubusercontent.com/Cixayah/289099fbcb021450eaea59eebcb2ad1d/raw/a5c0f4df70e31237d7c0a82fecf40445eda5bcb4/home'

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home

  // console.log(home);

  return (
    <>
      <Head>
        <title>Home | Cix</title>
        <meta name="description" content="Sou um dev junior full stack" />
      </Head>
      <div className="py-12 px-6 md:pdx-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
}

const loadHome = async () => {
  const res = await fetch(
    githubGist
  );
  const home = await res.json();
  return home
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
