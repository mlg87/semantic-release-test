module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        releaseRules: [
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "major",
            release: "major",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        presetConfig: {
          types: [
            {
              type: "refactor",
              section: "Enhancements",
            },
            {
              type: "feat",
              section: "Features",
            },
            {
              type: "fix",
              section: "Bug Fixes",
            },
            {
              type: "perf",
              section: "Performance Improvements",
            },
            {
              type: "major",
              section: "Major Changes",
            },
          ],
        },
        writerOpts: {
          commitsSort: ["subject", "scope"],
          commitGroupsSort: "title",
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "docs/CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: [
          "docs/CHANGELOG.md",
          "docs/releases.json",
          "README.md",
          "package.json",
          "yarn.lock",
        ],
        message:
          "Release <%= nextRelease.version %> - <%= new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }) %> [skip ci]\n\n<%= nextRelease.notes %>",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          "docs/CHANGELOG.md",
          "docs/releases.json",
          "README.md",
          "package.json",
          "yarn.lock",
        ],
      },
    ],
  ],
};
