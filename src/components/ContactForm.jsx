
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }


  const InputField = ({ type = 'text', placeholder }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )

  return (
    <section className="py-16 px-4 bg-white" id="Contact">
      <div className="max-w-4xl mx-auto">
       
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-blue-600 mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl font-bold text-gray-900">
            Bringing your <span className="text-blue-600">vision</span> to life
          </h2>
        </div>

       
        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField placeholder="Your Name" />
            <InputField type="email" placeholder="Your Email" />
            <InputField placeholder="Phone Number" />
            <InputField placeholder="Subject" />
          </div>

        
          <textarea
            rows="5"
            placeholder="Message"
            className="border rounded-md p-3 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          
          <button
            type="submit"
            className="bg-blue-600 text-white w-full py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          >
            submit now
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
