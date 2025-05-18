import {Spacing, type SpacingProps} from '.'

const meta = {
    title: 'base/Spacing',
    component: Spacing,
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
        },
    },
}

export default meta

export const 기본 = (args: SpacingProps) => {
    return <Spacing {...args} />
}
