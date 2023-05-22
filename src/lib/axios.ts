import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io/',
  headers: {
    'x-rapidapi-key': 'e7cf365a5bfc18f81a4d9753697f0d23',
    'x-rapidapi-host': 'v3.football.api-sports.io',
  },
  maxRedirects: 20,
})
