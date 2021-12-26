import {shallow} from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Pruebas en componente <GifGridItem/>', ()=> {

    const title = 'Un título'
    const url = 'https://localhost/algo.jpg'
    let wrapper = shallow(<GifGridItem title={title} url={url}/>);

    beforeEach(()=>{

    })

    test('Debe de mostrar <GifGridItem/> corectamente (hacer match con el snapshot)', ()=>{

        expect( wrapper ).toMatchSnapshot();
    });


    test('debe de tener un parrafo con el título', ()=> {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe de tener la imagen igual al url y alt de los props', ()=> {

        const img = wrapper.find('img');
        // console.log( img.prop('src') );

        expect(img.prop('src')).toBe( url );
        expect(img.prop('alt')).toBe( title );

    })

    test('debe de tener la clase animate__fadeInt', ()=>{
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);

    })



})
