import classNames from 'classnames/bind'
import styles from './Flex.module.scss'
import type {HTMLAttributes, PropsWithChildren} from 'react'

const cx = classNames.bind(styles)

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'column'
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
    align?: 'start' | 'center' | 'end'
    gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function Flex({children, direction, justify, align, gap, className, ...props}: PropsWithChildren<FlexProps>) {
    return (
        <div
            className={cx(
                'flex',
                direction && `direction-${direction}`,
                justify && `justify-${justify}`,
                align && `align-${align}`,
                gap && `gap-${gap}`,
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}
