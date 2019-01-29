import { mountWithPlugins } from '../../unit/test-utils/mountWithPlugins';
import Item from '@/components/Item.vue';

describe('snapshot - Item.vue', () => {
    // test that the item is rendering in the same way as before
    it('renders correctly', () => {
        // we create a wrapper and pass some mock data as the prop "item"
        const wrapper = mountWithPlugins(Item, {
            propsData: {
                item: {
                    id: 1,
                    score: 22,
                    url: 'https://www.google.com/',
                    type: 'job',
                    time: 1548753174935, // Tue Jan 29 2019 10:12:54 GMT+0100
                }
            }
        });
        expect(wrapper.element).toMatchSnapshot();
    })
});