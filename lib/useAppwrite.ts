import { Alert } from "react-native";
import { useCallback, useEffect, useState } from "react";

/**
 * Interface defining the options for the useAppwrite hook.
 * @template T - The type of data returned by the function.
 * @template P - The type of parameters required by the function.
 */
interface UseAppwriteOptions<T, P extends Record<string, string | number>> {
  fn: (params: P) => Promise<T>; // Function to fetch data.
  params?: P; // Parameters for the fetch function.
  skip?: boolean; // Whether to skip the initial fetch.
}

/**
 * Interface defining the return value of the useAppwrite hook.
 * @template T - The type of data returned by the function.
 * @template P - The type of parameters required by the refetch function.
 */
interface UseAppwriteReturn<T, P> {
  data: T | null; // The fetched data or null if not fetched yet.
  loading: boolean; // Indicates if the data is being loaded.
  error: string | null; // Error message if the fetch failed.
  refetch: (newParams?: P) => Promise<void>; // Function to refetch the data with new parameters.
}

/**
 * Custom React hook for managing asynchronous data fetching with Appwrite.
 * @template T - The type of data returned by the function.
 * @template P - The type of parameters required by the function.
 * @param options - Configuration options for the hook.
 * @returns UseAppwriteReturn<T, P> - An object containing the state and refetch function.
 */
export const useAppwrite = <T, P extends Record<string, string | number>>({
  fn,
  params = {} as P,
  skip = false,
}: UseAppwriteOptions<T, P>): UseAppwriteReturn<T, P> => {
  const [data, setData] = useState<T | null>(null); // State for storing fetched data.
  const [loading, setLoading] = useState(!skip); // State for tracking loading status.
  const [error, setError] = useState<string | null>(null); // State for storing error messages.

  /**
   * Function to fetch data with the provided parameters.
   * Handles loading, error, and data states.
   * @param fetchParams - Parameters for the fetch function.
   */
  const fetchData = useCallback(
    async (fetchParams: P) => {
      setLoading(true);
      setError(null);

      try {
        const result = await fn(fetchParams);
        setData(result);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
        Alert.alert("Error", errorMessage); // Show error alert to the user.
      } finally {
        setLoading(false);
      }
    },
    [fn],
  );

  /**
   * Effect to fetch data on component mount unless `skip` is true.
   */
  useEffect(() => {
    if (!skip) {
      fetchData(params);
    }
  }, []);

  /**
   * Function to refetch data with new parameters.
   * @param newParams - New parameters for the fetch function.
   */
  const refetch = async (newParams?: P) => {
    await fetchData(newParams || params); // Use existing params if newParams is undefined.
  };

  return { data, loading, error, refetch }; // Return state and refetch function.
};
