import {colors} from '../colors'
import {Text} from '.'
import type {Size, TextProps} from '.'

const meta = {
    title: 'base/Text',
    component: Text,
    argTypes: {
        color: {
            control: {
                type: 'select',
                options: Object.keys(colors),
            },
            description: '텍스트 색상',
        },
        bold: {
            control: {type: 'boolean'},
        },
    },
}

export default meta

export const 텍스트 = ({color, bold, text}: TextProps & {text: string}) => {
    return ['t1', 't2', 't3', 't4', 't5'].map((size) => {
        return (
            <Text key={size} color={color} size={size as Size} bold={bold}>
                {text}
            </Text>
        )
    })
}

텍스트.args = {
    text: '기본 텍스트',
}
