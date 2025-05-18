import {Grid} from '.'
import type {GridProps} from '.'

const meta = {
    title: 'base/Grid',
    component: Grid,
    args: {
        columns: 3,
        gap: 'sm',
        align: undefined,
        justify: undefined,
    },
    argTypes: {
        columns: {
            control: {type: 'number', min: 1, max: 12},
            description: 'Number of columns in the grid',
        },
        gap: {
            control: 'select',
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
            description: 'Spacing between grid items',
        },
        align: {
            control: 'select',
            options: ['start', 'center', 'end'],
            description: 'Align items vertically',
        },
        justify: {
            control: 'select',
            options: ['start', 'center', 'end'],
            description: 'Justify items horizontally',
        },
    },
}

export default meta

export const 그리드 = (props: GridProps) => {
    return (
        <Grid {...props}>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 1</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 2</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 3</div>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 4</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 5</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 6</div>
            <div style={{background: '#e0e0e0', padding: '20px'}}>Item 7</div>
            <div style={{background: '#c0c0c0', padding: '20px'}}>Item 8</div>
            <div style={{background: '#a0a0a0', padding: '20px'}}>Item 9</div>
        </Grid>
    )
}
