import {shallow} from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe('Pruebas en componente <AddCategory/>', ()=> {
    test('debe de mostrarse correctamnte', () => {

        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de nostrar una lista de categorias', () => {

        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
})
