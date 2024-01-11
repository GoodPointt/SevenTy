import { getDictionary } from '../lib/dictionary'
import { IParams } from '../lib/interfaces'
import Contact from '../ui/contact/contact/Contact'
import Represent from '../ui/contact/represent/Represent'
import Hero from '../ui/landing/hero/Hero'
import Projects from '../ui/work/Projects'

const LandingPage: React.FC<IParams> = async ({ params: { lang } }) => {
	const {
		// hero,
		// projects,
		// represent,
		contact,
	} = await getDictionary(lang)

	return (
		<>
			<Hero />
			<Projects />
			<Represent />
			<Contact contacts={contact.contacts} contactForm={contact.contactForm} />
		</>
	)
}

export default LandingPage
