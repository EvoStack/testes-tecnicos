import {useQuery, useMutation, useQueryClient} from 'react-query';

export function useQuestProcessor(){
  const queryClient = useQueryClient();

  function query(key: string, queryFunction: any,  options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options
    })
  }

  function mutate(key: string, mutationFunction: any, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(key),
    })
  }

  return {query, mutate, 
  }
}