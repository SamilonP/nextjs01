import Database from "better-sqlite3"

const db = new Database("./sqlite.db")

export async function GET() {
    const games = db.prepare("SELECT * FROM games").all()
    return Response.json(games)
}

export async function POST(req: Request) {
    const body = await req.json()
    const games = db.prepare("INSERT INTO games (title, description, image) VALUES (?, ?, ?)")
    const data = games.run(body.title, body.description, body.image)
    return Response.json(games)
}