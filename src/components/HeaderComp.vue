<script>
import { store } from '../store';
import axios from 'axios';

export default {
    data() {
        return {
            store,
            searchText: '',
        };
    },



    created() {


    },

    methods: {
        searchFilm() {
            axios.get(store.apiUri + this.searchText).then((response) => {
                store.listFilm = response.data.results;
                console.log(response.data.results);
            });
        },
    }
};


</script>

<template>
    <div class="container mt-5 general">
        <div class="input-group mb-3">
            <input v-model="searchText" type="text" class="form-control" placeholder="Cerca film per nome..."
                aria-label="Recipient's username" aria-describedby="button-addon2" @keyup.enter="searchFilm()">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="searchFilm()">Cerca</button>
        </div>
    </div>

    <div class="container resultSearch">
        <ul v-for="film in store.listFilm">
            <li>Il Titolo è {{ film.title }}</li>
            <li>Il Titolo originale è {{ film.original_title }}</li>
            <li>La Lingua originale {{ film.original_language }}</li>
            <li>Il Voto del film è {{ film.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>