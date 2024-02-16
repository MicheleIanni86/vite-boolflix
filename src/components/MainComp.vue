<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
            firstPartURl: "https://image.tmdb.org/t/p/w200",
            imageNotFound: "../src/assets/img/icon-image-not-found-free-vector.jpg"
        };
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
        },

        imgNotFount(posterNull) {
            if (posterNull == null) {
                return this.imageNotFound;
            } else {
                return this.firstPartURl + posterNull;
            };
        },

        voteRound(vote) {
            return Math.ceil(vote / 2);
        },
    },
};

</script>




<template>
    <div class="container resultSearch">
        <div class="container secondContainer">

            <div class="row listTitle">

                <p class="mt-3 mb-4">MOVIES</p>
                <div class="col-2" v-for="film in store.listFilm">

                    <div class="cardFilmSerie d-flex mb-3">

                        <div class="imgPoster">
                            <img :src="imgNotFount(film.poster_path)" alt="" class="imageIntern">
                        </div>

                        <div class="infoFilmSerie">

                            <ul>
                                <li class="title">{{ film.title }}</li>
                                <li class="titleOriginal my-1">Titolo originale: <br> <span>{{ film.original_title }}</span>
                                </li>
                                <li class="langOriginal my-1">Lingua originale: <span> <img
                                            :src="changeFlag(film.original_language)"> </span></li>
                                <li class="starVote">Voto:
                                    <i class="fa-solid fa-star" style="color: #FFD43B;"
                                        v-for="n in voteRound(film.vote_average)"></i>
                                    <i class="fa-regular fa-star" style="color: #FFD43B;"
                                        v-for="n in 5 - voteRound(film.vote_average)"></i>
                                </li>
                                <div class="overview">
                                    {{ film.overview }}
                                </div>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>

            <div class="row listTitle">
                <p class="mt-3 mb-4">SERIES</p>
                <div class="col-2" v-for="serie in store.listSerie">

                    <div class="cardFilmSerie d-flex mb-3">

                        <div class="imgPoster">
                            <img :src="imgNotFount(serie.poster_path)" alt="" class="imageIntern">
                        </div>

                        <div class="infoFilmSerie">

                            <ul>
                                <li class="title"> {{ serie.name }} </li>
                                <li class="titleOriginal my-1">Titolo originale: <br> <span>{{ serie.original_name }}</span>
                                </li>
                                <li class="langOriginal my-1">Lingua originale: <span> <img
                                            :src="changeFlag(serie.original_language)"></span></li>
                                <li class="starVote">Voto:
                                    <i class="fa-solid fa-star" style="color: #FFD43B;"
                                        v-for="n in voteRound(serie.vote_average)"></i>
                                    <i class="fa-regular fa-star" style="color: #FFD43B;"
                                        v-for="n in 5 - voteRound(serie.vote_average)"></i>
                                </li>
                                <div class="overview">
                                    {{ serie.overview }}
                                </div>
                            </ul>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
</template>




<style lang="scss" scoped></style>