import React from 'react'
import API from "../Api/API";
import { useQuery ,useMutation,useQueryClient} from "react-query";

const fetchSuperHero = async() => {
    return await API.get("/SuperHeros");
  };

const postSuperhero = async(heros)=>{
  return await API.post(`/SuperHeros`,heros)
}
export const useSuperHeroData = (onSuccess,onError,toggle) => {
  return  useQuery(
        'RQsuperhero',
        fetchSuperHero,
        {
          
        
          // select: (data) => {
          //   const superHeroNames = data.data.map((hero) => hero.name);
          //   return superHeroNames;
          // },
          refetchOnWindowFocus:false,
          refetchOnMount:true,
          enabled: toggle
        }
      );
}

export const useAddsuperHeroData = () => {
  const queryClient = useQueryClient()
    return useMutation(postSuperhero,{
      onSuccess : (data)=>{
        //  queryClient.invalidateQueries('RQsuperhero')
        queryClient.setQueriesData('RQsuperhero',(oldQueryData)=>{
          return {
            ...oldQueryData, data : [...oldQueryData.data,data.data]
          }
        })
      }
    })
}

