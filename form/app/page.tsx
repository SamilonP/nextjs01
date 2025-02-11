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

      <div className="p-10 bg-black flex flex-col text-slate-50">
        <form action={saveAction}>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="name">Username</label>
            <input required placeholder="Nönnönnöö" type="text" name="name"/>
          </div>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="email">E-mail</label>
            <input required type="text" name="email"/>
          </div>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="address">Address</label>
            <input required type="text" name="address"/>
          </div>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="zip">Postal Code</label>
            <input required type="text" name="zip"/>
          </div>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="region">City/Local Region</label>
            <input type="text" name="region"/>
          </div>
          <div id="input-container" className="flex flex-col w-full">
            <label htmlFor="msg">Message</label>
            {/* <input className="message-input" required type="text" name="msg"/> */}
            <textarea name="msg" className="message-input" required cols={5} rows={8}></textarea>
          </div>
          <div className="button-container">
            <button>Submit</button>
          </div>
        </form> 
      </div>

      
    </div>
  )
}
