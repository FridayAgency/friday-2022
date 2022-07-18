let policy = {
  userAgent: '*',
};

if (process.env.ENVIORNMENT !== 'production') {
  policy.disallow = '/';
}

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_LOCAL_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [policy],
  },
  outDir: './public',
};
