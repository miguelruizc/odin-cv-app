import {Section} from './Section.jsx';

function App() {

  return (
    <>
      <Section title="General Information">
        -name
        <input></input>
        -email
        <input></input>
        -phone
        <input></input>
      </Section>
      <Section title="Education">
        -education item 
          -school name
          -title of study
          -date of study
      </Section>
      <Section title="Professional Experience">
        -professional item 
          -company name
          -position title 
          -main responsabilities
          -start date
          -end date
      </Section>
    </>
  )
}

export default App
