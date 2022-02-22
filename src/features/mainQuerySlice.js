import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const SoccerApi = createApi({
  reducerPath: "SoccerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.football-data.org/v2/",
    prepareHeaders: headers => {
      // headers.set('X-Auth-Token', 'c512bd1adb1947e987dbeff47924c56e' )
      headers.set('X-Auth-Token', import.meta.env.VITE_APP_KEY )
      return headers
    }
  }),
  tagTypes: [],
  endpoints: (build) => ({
    getAreaById: build.query({
      query: (id) => ({
        url: `areas/${id ? id : ''}`
      })
    }),
    getMatchesByDate: build.query({
      query: ({dateFrom, dateTo}) => ({
        url: 'matches',
        params: { dateFrom: dateFrom, dateTo: dateTo}
      }),
      transformResponse: (response) => response.matches
    }),
    getTeamById: build.query({
      query: (id, areas) => ({
        url: id ? `teams/${id}` : 'teams',
        params: { areas: areas }
      })
    }),
    getTeamsByArea: build.query({
      query: (area) => ({
        url: `teams`,
        params: { areas: area, limit: 5 }
      })
    }),
    getCompetitions: build.query({
      query: (id) => ({
        url: id ? `competitions/${id+'/matches'}` : 'competitions'
      })
    }),
    getMatchesByTeamId: build.query({
      query: id => `teams/${id}/matches`,
      transformResponse: (response) => response.matches
    })
  }),
});

export const { useGetAreaByIdQuery,
               useGetMatchesByDateQuery,
               useGetTeamByIdQuery,
               useGetTeamsByAreaQuery,
               useGetCompetitionsQuery,
               useGetMatchesByTeamIdQuery} = SoccerApi;

