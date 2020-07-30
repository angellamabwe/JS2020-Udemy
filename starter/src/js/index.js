import Search from './models/Search';

/**
 * global state of the app: containing the following
 * -Search object: containing search query & the search result
 * -Current recipe object
 * -shopping list object
 * -liked recipes
 */

const state = {}; //each time we reload the app, the state will be empty


const controlSearch = async () => {
    //1. get query from Search view
    const query = 'salad'; //TODO

    if(query){
        //2. Create a new object & add it to the state
        state.search = new Search(query);

        /**
         * 3. prepare UI for results like clearing previous results or show a loading spinner
         */
        
        //4. Search for the recipes
        await state.search.getResults();

        /**We want the rendering of the results only to happen after we actually receive the results from the API, alright?
        *so what we have to do here is to actually await this promise, right?
        * hence await abv */

        //5. Render results on UI
        console.log(state.search.result);
    }
}
document.querySelector('.search').addEventListener('submit', e => { //passing the event object to the callback function
    e.preventDefault();
    controlSearch();
});
