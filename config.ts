const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "uvacoder",
  subtitle: "Code · Design · Video",
  birthday: "1979-09-22",
  githubUsername: "uvacoder",
  notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
  notionAchievementTableId: "f8a1b162054a45a2b7cce9872f0ba68b",
  notionProjectTableId: "d76f89a2d03741bc875cbb7ab8d71f1a",
  githubToken,
};
