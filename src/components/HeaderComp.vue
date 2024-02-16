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
            store.show = true;
            axios.get(store.apiUriMovie + this.searchText).then((response) => {
                store.listFilm = response.data.results;
                console.log(response.data.results);
            });
        },

        searchSerie() {
            store.show = true;
            axios.get(store.apiUriSerie + this.searchText).then((response) => {
                store.listSerie = response.data.results;
                console.log(response.data.results);
            });
        },

    },
};


</script>

<template>
    <div class=" general">
        <img src="../assets/img/boolflixLogo.png" alt="" class="imgLogo">
        <div class="input-group imputGroup">
            <input v-model="searchText" type="text" class="form-control"
                placeholder="Cerca Film o Serie che ti interessano..." aria-label="Recipient's username"
                aria-describedby="button-addon2" @keyup.enter="searchFilm(), searchSerie()">
            <button class="btn btn-secondary" type="button" id="button-addon2"
                @click="searchFilm(), searchSerie()">Cerca</button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.general {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.9);
    position: sticky;
    top: 0;


    .imgLogo {
        height: 70px;
    }

    .imputGroup {
        width: 30%;
        height: 40%;
    }
}
</style>