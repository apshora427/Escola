
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
   
  }


  const InputField = ({ type = 'text', placeholder }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-md p-[20px] w-full"
    />
  )

  return (
    <section className="py-16 px-4 bg-white" id="Contact">
      <div className="max-w-4xl mx-auto">
       
        <div className=" mb-8">
          <p className="font-Inter font-bold text-[18px] leading-[31.5px] text-P">GET IN TOUCH</p>
          <h2 className="font-Inter font-bold sm:text-[32px] md:text-[42px] sm:leading-[40px] md:leading-[54px] text-900">
            Bringing your <span className="text-P">vision</span> to life
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
            className="border p-[12px] w-full"
          ></textarea>

          
          <button
            type="submit"
            className="bg-p bg-P text-white w-full py-[21px] font-Inter font-normal text-[17px]  leading-[26px] "
          >
            submit now
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
