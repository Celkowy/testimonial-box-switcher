import { useEffect, useState } from 'react'
import LineAnimation from './Components/LineAnimation'
import Testimonial from './Components/Testimonial'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Image from './Components/Image'
import InfoContainer from './Components/InfoContainer'
import Position from './Components/Position'
import Name from './Components/Name'
import QuoteRight from './Components/QuoteRight'
import QuoteLeft from './Components/QuoteLeft'

const duration = 10000

function App() {
  const [testominialNumber, changeTestimonial] = useState(0)
  const testimonials = [
    {
      name: 'Miyah Myles',
      position: 'Marketing',
      photo:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
      text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
    },
    {
      name: 'June Cha',
      position: 'Software Engineer',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
      name: 'Iida Niskanen',
      position: 'Data Entry',
      photo: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
    },
    {
      name: 'Renee Sims',
      position: 'Receptionist',
      photo: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
    },
    {
      name: 'Jonathan Nunfiez',
      position: 'Graphic Designer',
      photo: 'https://randomuser.me/api/portraits/men/43.jpg',
      text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
    },
    {
      name: 'Sasha Ho',
      position: 'Accountant',
      photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
      text: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
    },
    {
      name: 'Veeti Seppanen',
      position: 'Director',
      photo: 'https://randomuser.me/api/portraits/men/97.jpg',
      text: 'This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (testominialNumber >= testimonials.length - 1) changeTestimonial(0)
      else changeTestimonial(prev => prev + 1)
    }, duration)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <Testimonial>
      <QuoteRight className={'fas fa-quote-right fa-quote'}></QuoteRight>
      <QuoteLeft className={'fas fa-quote-left fa-quote'}></QuoteLeft>
      <LineAnimation duration={duration} number={testominialNumber}></LineAnimation>
      <Content>{testimonials[testominialNumber].text}</Content>
      <Footer>
        <Image src={testimonials[testominialNumber].photo}></Image>
        <InfoContainer>
          <Name>{testimonials[testominialNumber].name}</Name>
          <Position>{testimonials[testominialNumber].position}</Position>
        </InfoContainer>
      </Footer>
    </Testimonial>
  )
}

export default App
