import Header from '@/components/Header'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import ContinuingEducation from '@/components/ContinuingEducation'
import Licenses from '@/components/Licenses'
import Languages from '@/components/Languages'
import Skills from '@/components/Skills'
import Recognitions from '@/components/Recognitions'
import Footer from '@/components/Footer'
import LanguageLoader from '@/components/LanguageLoader'

export default function Home() {
  return (
    <>
      <LanguageLoader />
      <Header />
      <main id="main-content">
        <Experience />
        <Education />
        <ContinuingEducation />
        <Licenses />
        <Languages />
        <Skills />
        <Recognitions />
      </main>
      <Footer />
    </>
  )
}