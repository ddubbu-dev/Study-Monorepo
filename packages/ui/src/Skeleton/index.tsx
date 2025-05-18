import classnames from 'classnames/bind'

import styles from './Skeleton.module.scss'
import type {HTMLAttributes} from 'react'

const cx = classnames.bind(styles)

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    width: number
    height: number
    radius?: number
}

export function Skeleton({width, height, radius, style, ...props}: SkeletonProps) {
    return <div className={cx('skeleton')} style={{width, height, borderRadius: radius, ...style}} {...props} />
}
