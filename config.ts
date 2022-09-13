const githubToken = process.env.GITHUB_TOKEN;

if (!githubToken) {
  throw new Error("Missing environment variable GITHUB_TOKEN.");
}

export const config = {
  name: "uvacoder",
  subtitle: "Code · Design · Film",
  birthday: "1979-09-22",
  githubUsername: "uvacoder",
  notionBlogTableId: "3a1f675cc61e47a3b77c858dc66b752a",
  notionAchievementTableId: "f8a1b162054a45a2b7cce9872f0ba68b",
  notionProjectTableId: "5e74829f397e430ebf7c18dfacbb7ac0",
  githubToken,
};
