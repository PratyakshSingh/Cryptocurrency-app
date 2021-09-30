import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cfae7de4d7mshb3f79c22df08945p14c8a6jsn90d7a2418bba'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history/${timeperiod}`),
          }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),  
    })
})

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;