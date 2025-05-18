import classNames from 'classnames/bind'
import styles from './image.module.scss'

const cx = classNames.bind(styles)

export const RATIO_MAP = {
    '4:1': 'aspect-4-1',
    '5:3': 'aspect-5-3',
    '4:3': 'aspect-4-3',
    '1:1': 'aspect-square',
    '10:11': 'aspect-10-11',
}

export interface BaseImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    size?: keyof typeof RATIO_MAP
    width?: number
    height?: number
    radius?: number
}

export function Image({src, size = '1:1', width, height, style, radius, className, ...props}: BaseImageProps) {
    return (
        <div
            className={cx('container', RATIO_MAP[size], className)}
            style={{
                width: width ?? '100%',
                height: height ?? 'auto',
                borderRadius: radius,
                ...style,
            }}
        >
            <img src={src} loading="lazy" {...props} />
        </div>
    )
}
