import {shallow} from "enzyme";
import AddCategory from "../../components/AddCategory";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs} from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en componente <GifGrid/>', ()=> {
    const category = 'WTF'


    test('debe de mostrarse correctamnte', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes con nuestro Hook useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
            {
                id: 'DEF',
                url: 'https://localhost/cualquier/cosa.jpg',
                title: 'Cualquier cosa'
            }
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBeGreaterThanOrEqual(1)
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length)




    });




});
