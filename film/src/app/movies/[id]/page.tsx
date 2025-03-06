export default async function MoviePage({ params }: {params: {id: number}}) {  
    const res = await fetch("http://localhost:3000/api/movies");
    const movies = await res.json(); 
    
    const movie = movies[params.id - 1];
    if (!movie) {
        return <h1>Filmen hittades inte!</h1>;  
    }  
    
    return(<div>
        <h1>{movie.title}</h1><p>Recension: *****</p>{movie.description}</div>);} 