import type {BaseImageProps} from '.'
import {Image, RATIO_MAP} from '.'

const meta = {
    title: 'base/image',
    component: Image,
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: Object.keys(RATIO_MAP),
            },
            description: '이미지 비율 (aspect-ratio)',
        },
        width: {
            control: 'number',
            description: '컨테이너의 width (예: "120px", "50%")',
        },
        height: {
            control: 'number',
            description: '컨테이너의 height (예: "180px", "auto")',
        },
        radius: {
            control: 'number',
            description: '컨테이너의 borderRadius (예: "8px", "50%")',
        },
    },
}

export default meta

export const 이미지 = (props: BaseImageProps) => {
    return <Image {...props} />
}

이미지.args = {
    src: 'https://picsum.photos/1000/1000',
    radius: 8,
}
