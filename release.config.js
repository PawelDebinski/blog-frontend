module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/PawelDebinski/blog-frontend",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
