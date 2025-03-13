export default function Home() {
  async function saveAction(formData: FormData) {
    "use server"
  }
  
  return (
    <div className="container h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-950 to-slate-400">
      <p className="text-white text-5xl m-4">Tailwind CSS</p>
      <button className="bg-orange-500 p-4 text-white rounded-lg hover:bg-white hover:text-black">Click here!</button>
    </div>
  )
}
