"use client";
import { useState } from "react";

export default function Search({ movies }) {  
    const [query, setQuery] = useState("");  
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

     return(<div>      
        <input type="text" placeholder="Sök film..." value={query} onChange={(e) => setQuery(e.target.value)}/>
        {filteredMovies.map(f => (<div key={f.id}><a href={"/movies/" + f.id}>{f.title}</a></div>))}</div>);
}  