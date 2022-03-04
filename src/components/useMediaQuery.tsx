import { useState,useEffect } from "react";
import React from "react";

function useMediaQuery(query){
    var defaultMatches;
    typeof window !== 'undefined' ? defaultMatches = window.matchMedia(query).matches : null;
    const [matches,setMatches] = useState(defaultMatches);
    useEffect(()=>{
        
        const media = window.matchMedia(query);
        if(media.matches !== matches) setMatches(media.matches);
        const listner = () => setMatches(media.matches);
        media.addListener(listner);
        return () => media.removeListener(listner);
    },[query,matches]);
    return matches;
}

export default useMediaQuery;