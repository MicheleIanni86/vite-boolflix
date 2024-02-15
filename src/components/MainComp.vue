<script>
import { store } from '../store';

export default {
    data() {
        return { store };
    },


    created() {

    },

    methods: {
        changeFlag(lang) {
            if (lang == 'it') return "https://flagsapi.com/IT/shiny/24.png";
            if (lang == 'fr') return "https://flagsapi.com/FR/shiny/24.png";
            if (lang == 'en') return "https://flagsapi.com/GB/shiny/24.png";
            if (lang == 'ja') return "https://flagsapi.com/JP/shiny/24.png";
            if (lang == 'de') return "https://flagsapi.com/DE/shiny/24.png";
            if (lang == 'pt') return "https://flagsapi.com/PT/shiny/24.png";
            if (lang == 'es') return "https://flagsapi.com/ES/shiny/24.png";
            if (lang == 'us') return "https://flagsapi.com/US/shiny/24.png";
            else return "https://flagsapi.com/JE/shiny/24.png";

        }
    },

};


</script>

<template>
    <div class="container resultSearch">
        <div class="row justify-content-center">
            <div class="col-5">
                <p class="mt-3 mb-4">Lista FILM</p>
                <ul v-for="film in store.listFilm">
                    <li>Titolo: {{ film.title }} </li>
                    <li>Titolo originale: {{ film.original_title }}</li>
                    <li>Lingua originale: <span> <img :src="changeFlag(film.original_language)"> {{ film.original_language
                    }} </span></li>
                    <li>Voto: {{ film.vote_average }}</li>
                </ul>
            </div>

            <div class="col-5">
                <p class="mt-3 mb-4">Lista SERIE</p>
                <ul v-for="serie in store.listSerie">
                    <li>Titolo: {{ serie.name }} </li>
                    <li>Titolo originale: {{ serie.original_name }}</li>
                    <li>Lingua originale: <span> <img :src="changeFlag(serie.original_language)"> {{ serie.original_language
                    }} </span></li>

                    <li>Voto: {{ serie.vote_average }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col-5 p {
    text-align: center;
    font-weight: bold;
    color: white;
}

ul {
    border: 2px solid black;
    border-radius: 10px;
    background-color: coral;
}
</style>