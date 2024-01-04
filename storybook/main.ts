import { StorybookConfig } from '@storybook/react-webpack5'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import { join, dirname } from 'path'

const getAbsolutePath = (value: string): any => {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: (config) => {
    // @ts-ignore
    config.resolve.plugins = [new TsconfigPathsPlugin()]
    return config
  }
}

export default config
