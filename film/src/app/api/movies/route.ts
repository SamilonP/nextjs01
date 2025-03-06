export async function GET() 
{  
    const movies = [    
        { id: "1", title: "Interstellar", description: "bra film" },
        { id: "2", title: "Inception", description: "INCEPTION" },    
        { id: "3", title: "The Matrix" },
        { id: "4", title: "MAD GOD"},
        { id: "5", title: "Arctic"},
        { id: "6", title: "Blues Brothers"},
        { id: "7", title: "Night of the Living Dead"},
        
    ];
    
    return Response.json(movies);
}  