export default function Home() {
  async function saveAction(formData: FormData) {
    "use server"
    console.log(formData.get("name")
     + "\n" + formData.get("email")
     + "\n" + formData.get("address")
     + "\n" + formData.get("zip")
     + "\n" + formData.get("region")
     + "\n" + formData.get("msg"))
  }
  
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="text-container">
        <h2>Send a message</h2>
        <p>Input the required info and give us a message!</p>
      </div>

    </div>
  )
}
