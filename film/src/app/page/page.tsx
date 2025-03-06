import Search from "../components/Search";

export default async function HomePage() 
{  
    const res = await fetch("http://localhost:3000/api/movies");  
    const movies = await res.json();  
    
    
    return (    
    <div>      
        <h1>Filmrecensioner</h1>      
        <Search movies={movies}></Search>
    </div>);}