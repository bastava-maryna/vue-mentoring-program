import { afterEach, beforeEach, describe, expect } from "vitest"
import { shallowMount } from "@vue/test-utils"
import MovieCardList from "../src/components/MovieCardList.vue"
import MovieCard from "../src/components/MovieCard.vue"
import NoFilmsFound from "../src/components/NoFilmsFound.vue"

describe("MovieCardList.vue", (): void => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallowMount(MovieCardList, {
      props: {
        movies: [
          {
            id: "4",
            title: "Cape Fear",
            rating: "R",
            year: 1991,
            users_rating: 7.3,
            votes: "165,628",
            metascore: 73,
            img_url:
              "https://m.media-amazon.com/images/M/MV5BNjdhNzZlYzYtYTBlNS00NTJiLWI2ZWUtMDI2YzI2MzM5NjY4XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL__QL50.jpg",
            countries: "['USA']",
            languages: "['English']",
            actors:
              "['Robert De Niro', 'Nick Nolte', 'Jessica Lange', 'Juliette Lewis', 'Joe Don Baker', 'Robert Mitchum', 'Gregory Peck', 'Martin Balsam', 'Illeana Douglas', 'Fred Thompson', 'Zully Montero', 'Craig Henne', 'Forest Burton', 'Edgar Allan Poe IV', 'Rod Ball']",
            genre: "['Crime', 'Thriller']",
            tagline: "There is nothing in the dark that isn't there in the light. Except fear.",
            description:
              "A convicted rapist, released from prison after serving a fourteen-year sentence, stalks the family of the lawyer who originally defended him.",
            directors: "['Martin Scorsese']",
            runtime: "128 min",
            imdb_url: "https://www.imdb.com/title/tt0101540/"
          },
          {
            id: "5",
            title: "Mean Girls",
            rating: "PG-13",
            year: 2004,
            users_rating: 7,
            votes: "320,492",
            metascore: 66,
            img_url:
              "https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY268_CR3,0,182,268_AL__QL50.jpg",
            countries: "['USA', 'Canada']",
            languages: "['English', 'German', 'Vietnamese', 'Swahili']",
            actors:
              "['Lindsay Lohan', 'Rachel McAdams', 'Tina Fey', 'Tim Meadows', 'Amy Poehler', 'Ana Gasteyer', 'Lacey Chabert', 'Lizzy Caplan', 'Daniel Franzese', 'Neil Flynn', 'Jonathan Bennett', 'Amanda Seyfried', 'Rajiv Surendra', 'Elana Shilling', 'Graham Kartna']",
            genre: "['Comedy']",
            tagline: "Survival of the Ruthless",
            description:
              "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
            directors: "['Mark Waters']",
            runtime: "97 min",
            imdb_url: "https://www.imdb.com/title/tt0377092/"
          }
        ]
      }
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  test("displays movies from the movies store", () => {
    expect(wrapper.findAllComponents(MovieCard).length).toBe(2)
  })
  test("displays number of movies from the movies store", (): void => {
    expect(wrapper.vm.searchedMoviesLength).toBe(2)
  })
  test("should render the NoFilmsFound component if searchedMoviesLength=0", async () => {
    await wrapper.setProps({ movies: [] })
    expect(wrapper.vm.searchedMoviesLength).toBe(0)
    expect(wrapper.findComponent(NoFilmsFound).exists()).toBe(true)
  })
  test("should not render the NoFilmsFound component if searchedMoviesLength>0", async () => {
    expect(wrapper.vm.searchedMoviesLength).toBe(2)
    expect(wrapper.findComponent(NoFilmsFound).exists()).toBe(false)
  })
})
