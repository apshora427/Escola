import Contact_Form from "../components/Contact_Form"
import Contact_Info_Card from "../components/Contact_Info_Card"
import Hero from "../components/Hero"
import Map from "../components/Map"

const Contact_Us = () => {
  return (
    <div>
      <Hero title={"Contact"} page={"Contact"}/>
      <Map/>
      <Contact_Form/>
    </div>
  )
}

export default Contact_Us