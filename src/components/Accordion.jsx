import React, { useState } from 'react'
import AccordionProps from './AccordionPops';
import './Accordion.scss'

const Accordion = () => {
  const [active, setActive] = useState('What services does the IT Company provide?')
  return (
    <div className='accordion container'>
        <h1 className="title">
            ReactJSA According
        </h1>
        <div className="secContainer grid">
          <AccordionProps 
            title='What services does the IT Company provide?' 
            desc='Our IT Company provides a wide range of services, including software development, web design, mobile app development, cloud solutions, IT consulting, and cybersecurity services. We are dedicated to meeting your technology needs.'
            active={active} setActive={setActive} 
          />
          <AccordionProps 
            title='How can I contact customer support?' 
            desc='You can reach our customer support team through our dedicated helpline at [Phone Number], or you can send us an email at [Email Address]. We are available 24/7 to assist you with any technical issues or inquiries.'
            active={active} setActive={setActive} 
          />
          <AccordionProps 
            title='What technologies does the IT Company specialize in?' 
            desc='Our IT Company specializes in a variety of cutting-edge technologies, including but not limited to: 
            - Web development: HTML, CSS, JavaScript, React, Angular, Node.js
            - Mobile app development: iOS, Android, Flutter
            We stay up-to-date with the latest industry trends to provide you with top-notch solutions.'
            active={active} setActive={setActive} 
          />
          <AccordionProps 
            title='What is the process for project collaboration?' 
            desc='Our project collaboration process typically involves the following steps:
            1. Initial consultation: We discuss your project requirements, goals, and expectations.
            2. Planning and proposal: We create a detailed project plan and provide you with a proposal.
            3. Development and testing: Our team works on developing your project.'
            active={active} setActive={setActive} 
          />
        </div>

    </div>
  )

}

export default Accordion