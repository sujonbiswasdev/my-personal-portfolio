import  React, { Suspense } from 'react'
import Container from '../../components/Container'
import SkillCardSkeleton from './SkillCardSkeleton'
import { Helmet } from 'react-helmet'
const SkillCard =React.lazy(()=>import('./SkillCard'))

const Skills = () => {


  return (
      <Container className="py-0 md:py-16 min-h-screen px-[80px] ">
        <Helmet>
          <title>Skill page</title>
          <link rel="canonical" href="https://sujonbiswasdev.vercel.app/skills"/>
        </Helmet>
        <div>
            <h1 className='text-center text-white font-bold text-[40px] font-primary'>My Recent Skills</h1>

            <div className='pt-8 md:pt-[70px] flex flex-col relative justify-center items-center'>
                <div className=' flex items-center justify-center'>
                      <Suspense fallback={<SkillCardSkeleton/>}>
                      <SkillCard/>
                      </Suspense>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default Skills