import React from 'react'
import API from "../Api/API";
import { useQuery,QueryClient, useQueryClient } from "react-query";
import { data } from 'autoprefixer';

const fetchSuperHero = ({queryKey}) => {
  const heroID = queryKey[1]
    return API.get(`/SuperHeros/${heroID}`);
  };
export const useRQsuperHeroData = (heroID) => {
  const queryClient = useQueryClient()
    return  useQuery(
        ["superHero",heroID],
        fetchSuperHero,
        {
          initialData:()=>{
            const heroList = queryClient.getQueryData('RQsuperhero')?.data?.filter((items)=>items.id === parseInt(heroID))
            console.log(heroList)
            if(heroList){
              return {
                data : heroList
              }
            }else{
              return undefined
            }
          }
        }
      );
}
