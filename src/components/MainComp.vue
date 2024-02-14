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
            if (lang == 'it') {
                lang = "https://flagsapi.com/IT/shiny/16.png";
                return lang;
            } else if (lang == 'fr') {
                lang = "https://flagsapi.com/FR/shiny/16.png";
                return lang;
            } else if (lang == 'en') {
                lang = "https://flagsapi.com/GB/shiny/16.png";
                return lang;
            } else if (lang == 'ja') {
                lang = "https://flagsapi.com/JP/shiny/16.png";
                return lang;
            } else if (lang == 'de') {
                lang = "https://flagsapi.com/DE/shiny/16.png";
                return lang;
            } else if (lang == 'pt') {
                lang = "https://flagsapi.com/PT/shiny/16.png";
                return lang;
            } else if (lang == 'es') {
                lang = "https://flagsapi.com/ES/shiny/16.png";
                return lang;
            } else {
                lang = "https://flagsapi.com/MK/shiny/16.png";
                return lang;
            }
        }

    }
};

</script>

<template>
    <div class="container resultSearch">
        <ul v-for="film in store.listFilm">
            <li>Il Titolo è {{ film.title }} </li>
            <li>Il Titolo originale è {{ film.original_title }}</li>
            <li>Lingua originale <span> <img :src="changeFlag(film.original_language)"> </span></li>
            <li>Il Voto del film è {{ film.vote_average }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped></style>