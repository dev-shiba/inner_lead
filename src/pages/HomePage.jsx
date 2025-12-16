import Hero from '../components/Hero'
import ProblemSection from '../components/ProblemSection'
import AnimatedSection from '../components/AnimatedSection'
import TargetAudience from '../components/TargetAudience'
import Curriculum from '../components/Curriculum'
import Process from '../components/Process'
import Contact from '../components/Contact'

export default function HomePage() {
    return (
        <main>
            <Hero />
            <ProblemSection />
            <AnimatedSection />
            <TargetAudience />
            <Curriculum />
            <Process />
            <Contact />
        </main>
    )
}
