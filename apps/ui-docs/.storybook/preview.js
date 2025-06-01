import _ from '../node_modules/@dev-ddubbu/ui/dist/styles/design-system.scss'

console.log('_', _)

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
}

export default preview
