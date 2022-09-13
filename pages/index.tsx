import { NextSeo } from "next-seo";
import { GetStaticProps } from "next";
import { Hero } from "../components/sections/hero";
import { Work } from "../components/sections/work";
import { Footer } from "../components/sections/footer";
import { Achievements } from "../components/sections/achievements";
import { GitHubActivity } from "../components/sections/github-activity";
import { Post } from "../types/blog";
import { getBlogTable, getPageBlocks } from "../core/blog";
import { fetchRepos, Repo } from "../core/github";
import { config } from "../config";
import { Achievement } from "../types/achievement";
import { Project } from "../types/project";
import { getOpenGraphImage } from "../core/og-image";

interface AppProps {
  posts: Post[];
  achievements: Achievement[];
  projects: Project[];
  repos: {
    starredRepos: Repo[];
    contributedRepos: Repo[];
  };
}

export const getStaticProps: GetStaticProps<AppProps> = async () => {
  const [
    posts,
    projects,
    achievementsData,
    { contributedRepos, starredRepos },
  ] = await Promise.all([
    getBlogTable<Post>(config.notionBlogTableId),
    getBlogTable<Project>(config.notionProjectTableId),
    getBlogTable<Omit<Achievement, "blockMap">>(
      config.notionAchievementTableId
    ),

    fetchRepos(config.githubUsername, config.githubToken),
  ]);

  const achievements: Achievement[] = await Promise.all(
    achievementsData.map(async (a) => ({
      ...a,
      blockMap: await getPageBlocks(a.id),
    }))
  );

  return {
    props: {
      posts: posts
        .filter((post) => post.published)
        .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))),
      achievements,
      projects: projects.filter((p) => p.published),
      repos: {
        starredRepos,
        contributedRepos,
      },
    },
    revalidate: 10,
  };
};

export default ({ achievements, repos, projects }: AppProps) => (
  <>
    <NextSeo
      title={"uvacoder – Code · Design · Video"}
      titleTemplate={"%s"}
      openGraph={{
        images: [getOpenGraphImage("Timo Lins")],
      }}
      twitter={{
        handle: "@AlecCam43544378",
        cardType: "summary_large_image",
      }}
      description="Hey I'm Alec! I mess around learning code and other stuff."
    />
    <Hero />
    <Work projects={projects} preview />
    <Achievements achievements={achievements} />
    <GitHubActivity {...repos} />
    <Footer />
  </>
);
