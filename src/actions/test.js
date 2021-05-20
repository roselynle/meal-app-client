import axios from 'axios';
import * as action from './index';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock('axios');

describe('fetchRecipeDetails', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        store.clearActions()
    })

    it('get recipe', () => {
        const r =
        {
            _id: "testID",
            title: "test title",
            description: "test description",
            ingredients: "test ingredients",
            diet_req: "test diet_req",
            instructions: "test instructions",
            image_url: "test image_url"
        }
        const expectedActions = [
            { type: 'LOAD_RECIPE', payload: r }
        ]
        axios.get.mockImplementationOnce(() => Promise.resolve({ data: r }));

        return store.dispatch(action.fetchRecipeDetails("testId"))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})