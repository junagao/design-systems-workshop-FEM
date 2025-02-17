module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-contexts/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y/register',
  ],
}
