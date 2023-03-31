import React from 'react'
import API from "../Api/API";
import { useQuery } from "react-query";

const fetchSuperHero = ({queryKey}) => {
  const heroID = queryKey[1]
    return API.get(`/SuperHeros/${heroID}`);
  };
export const useRQsuperHeroData = (heroID) => {
    return  useQuery(
        ["RqsuperHero",heroID],
        fetchSuperHero,
      
      );
}
