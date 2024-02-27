
import ContactForm from '../../../components/ContactForm'
import HeroHeading from '../../../components/HeroHeading/HeroHeading'

const page = () => {
  return (
    <div cl>
      <HeroHeading className="pt-52 pb-24" title="Contact" subTitle="Get in touch" />
      <ContactForm />
    </div>
  )
}

export default page