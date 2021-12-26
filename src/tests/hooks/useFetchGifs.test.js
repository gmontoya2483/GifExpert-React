import {useFetchGifs} from "../../hooks/useFetchGifs";
import {renderHook} from "@testing-library/react-hooks";

describe('Pruebas sobre el custom hook useFetchGifs', () => {



    test('debe de rotornar el estado inicial', async () => {

        const category = 'One Punch'
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        const {  data, loading } = result.current;

        await waitForNextUpdate();

        // console.log(data, loading);
        expect( data ).toEqual([]);
        expect( loading ).toBeTruthy();

    });


    test('debe de retornar un arreglo de images y loading en false', async ()=> {
        const category = 'One Punch'
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs(category));
        await waitForNextUpdate();

        const {  data, loading } = result.current;

        // console.log(data, loading);
        expect( data.length ).toBeGreaterThan(0);
        expect( loading ).toBeFalsy();

    });

});
