import React, { useState, useEffect, useRef } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const runOnce = useRef(true);

  useEffect(() => {
    if (runOnce.current) {
      setIsLoading(true);
      let cancel;
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c) // axios way to cancel old requesets when tring to call new request.
      }).then(res => {
        console.log(res.data);
        setIsLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map(p => p.name));
      })
      return () => cancel(); // use the axios cancle token 
    }
    return () => runOnce.current = false;

  }, [currentPageUrl]);

  if (isLoading) {
    return "Loading...";
  }

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }


  return (
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}  
      />
    </>
  );
}

export default App;
