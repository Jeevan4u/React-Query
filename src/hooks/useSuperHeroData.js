import React from 'react'
import API from "../Api/API";
import { useQuery } from "react-query";

const fetchSuperHero = () => {
    return API.get("/SuperHeros");
  };
export const useSuperHeroData = (onSuccess,onError,queryParam,toggle,refetchTime) => {
  return  useQuery(
        `${queryParam}`,
        fetchSuperHero,
        {
          refetchInterval: refetchTime ? refetchTime : false,
          onSuccess,
          onError,
          select: (data) => {
            const superHeroNames = data.data.map((hero) => hero.name);
            return superHeroNames;
          },
          refetchOnWindowFocus:false,
          refetchOnMount:true,
          enabled: toggle
        }
      );
}

