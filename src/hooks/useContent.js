import { useQuery } from '@tanstack/react-query';
import { getContent } from '../services/apiContent';

export function useContent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['content'],
    queryFn: getContent,
    staleTime: 0,
  });

  const contentMap =
    data?.reduce((acc, row) => {
      // store with page prefix: "home.header_title", "services.header_title"
      acc[`${row.page}.${row.key}`] = row;
      // also store without prefix for truly global keys
      if (row.page === 'global') {
        acc[row.key] = row;
      }
      return acc;
    }, {}) ?? {};

  return { contentMap, isLoading, error };
}
