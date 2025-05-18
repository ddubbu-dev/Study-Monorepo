import {Flex} from '../Flex'
import {Skeleton} from '.'
import {ListRow} from '../ListRow'

const meta = {
    title: 'base/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
}

export default meta

export const 스켈레톤 = () => {
    return (
        <ul>
            <ListRow
                left={<Skeleton width={40} height={40} radius={20} />}
                contents={
                    <ListRow.Texts
                        title={<Skeleton width={198} height={22} style={{marginBottom: 4}} />}
                        subTitle={<Skeleton width={170} height={19} />}
                    />
                }
                right={
                    <Flex direction="column">
                        <Skeleton width={50} height={22} />
                    </Flex>
                }
            />
            <ListRow
                left={<Skeleton width={40} height={40} radius={20} />}
                contents={
                    <ListRow.Texts
                        title={<Skeleton width={198} height={22} style={{marginBottom: 4}} />}
                        subTitle={<Skeleton width={170} height={19} />}
                    />
                }
                right={
                    <Flex direction="column">
                        <Skeleton width={50} height={22} />
                    </Flex>
                }
            />
        </ul>
    )
}
