import img from '../assets/From_2_Image.png'
import ContactForm from './ContactForm'

const Form_2 = () => {
  return (
    <section>
        <div className="container">
            <div className="grid grid-cols-2">
                <div>
                    <img src={img} alt="" />
                </div>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Form_2