import React from 'react'

export const useFetch = async (route: string | URL | Request) => {
    const res = await fetch(route);
        
    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}