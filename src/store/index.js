import { reactive } from "vue";
export const store = reactive({
    apiUri: 'https://api.themoviedb.org/3/search/movie?api_key=a91f8f63b578bae33d184922b6d56a38&query=',
    listFilm: [],
});