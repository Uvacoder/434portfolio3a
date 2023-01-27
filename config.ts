const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "uvacoder",
  subtitle: "Tool · Collection · Homepage",
  birthday: "1979-09-22",
  githubUsername: "uvacoder",
  notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
  notionAchievementTableId: "f8a1b162054a45a2b7cce9872f0ba68b",
  notionProjectTableId: "36e722b408c74c4dbc34be5863fec243",
  githubToken,
};
