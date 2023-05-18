const useGetCharacterID = (url: string): number => Number(url.match(/[0-9]+/g)?.[0]);

export default useGetCharacterID;
