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
            axios.get(store.apiUriMovie + this.searchText).then((response) => {
                store.listFilm = response.data.results;
                console.log(response.data.results);
            });
        },

        searchSerie() {
            axios.get(store.apiUriSerie + this.searchText).then((response) => {
                store.listSerie = response.data.results;
                console.log(response.data.results);
            });
        },

    },
};


</script>

<template>
    <div class="container mt-5 general">
        <div class="input-group mb-3 px-5">
            <input v-model="searchText" type="text" class="form-control" placeholder="Cerca film per nome..."
                aria-label="Recipient's username" aria-describedby="button-addon2"
                @keyup.enter="searchFilm(), searchSerie()">
            <button class="btn btn-secondary" type="button" id="button-addon2"
                @click="searchFilm(), searchSerie()">Cerca</button>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>