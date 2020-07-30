import axios from 'axios';

export default class Search {
    constructor (query){
        this.query = query;
    }

    async getResults(){
        try{
            const feedback = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.query}`);
            this.result = feedback.data.recipes;
            //console.log(this.result);
        } catch(error){
            alert(error);
        }
    }
}

/*
*1. first install axios, HTTP request package that we want to use
*2. import it here coz that's where we want to use it
*3. create an async method which will make an AJAX call
*/