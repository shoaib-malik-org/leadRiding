
import Contact from '../components/contact'
import Navbar from '../components/Nab'
import Trending from '../components/popular2'
import Section from '../components/Section-1'
import Tesiimonal from '../components/testimonal'
import { Listing } from '../components/listing/listing'
import MyFooter from "../components/footer";


export default function Home() {
  return (<>
  <Navbar />
  <Section />
  <Trending />
  <Listing />
  <Tesiimonal />
  <Contact />
  <MyFooter />
  </>
      )
}
