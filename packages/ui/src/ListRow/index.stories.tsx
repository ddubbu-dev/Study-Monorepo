import {Flex} from '../Flex'
import {Image} from '../Image'
import {Text} from '../Text'
import {ListRow} from '.'

const meta = {
    title: 'base/ListRow',
    component: ListRow,
}

export default meta

export const 리스트 = () => {
    return (
        <ul>
            <ListRow
                left={<Image src="https://picsum.photos/1000/1000" width={40} height={40} radius={20} />}
                contents={
                    <ListRow.Texts title="망고 T 빌라 치앙마이 리조트" subTitle="Mango T. Villa Chiang Mai Resort" />
                }
                right={
                    <Flex direction="column">
                        <Text size="t6">3,000원</Text>
                    </Flex>
                }
            />
            <ListRow
                left={<Image src="https://picsum.photos/1000/1000" width={40} height={40} radius={20} />}
                contents={
                    <ListRow.Texts title="망고 T 빌라 치앙마이 리조트" subTitle="Mango T. Villa Chiang Mai Resort" />
                }
                right={
                    <Flex direction="column">
                        <Text size="t6">3,000원</Text>
                    </Flex>
                }
            />
        </ul>
    )
}
