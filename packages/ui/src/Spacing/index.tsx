import classnames from 'classnames/bind'
import styles from './Spacing.module.scss'

const cx = classnames.bind(styles)

export interface SpacingProps {
    size?: 'sm' | 'md' | 'lg' | 'xl'
}

export function Spacing({size = 'sm'}: SpacingProps) {
    return <div className={cx('spacing', `size-${size}`)} />
}
