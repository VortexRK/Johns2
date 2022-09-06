import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Routes, Route } from 'react-router-dom'
import WorkLists from './Works/WorkLists'
import DesigningDashboard from './Works/DesigningDashboard'
import portrait from './images/portrait.jpg'
import dashboard from './images/dashboard.jpg'
import malayalam from './images/malayalam.jpg'
import components from './images/components.jpg'
import NoMatch from './NoMatch'

const Works = props => {
  const works = [
    { id: 1, header: 'Designing Dashboards. CLICK ME', image: dashboard, year: 2020, type: 'Dashboard', path: 'design', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 2, header: 'Vibrant Portraits of 2020', image: portrait, year: 2018, type: 'Illustration', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 3, header: '36 Days of Malayalam type', image: malayalam, year: 2019, type: 'Typography', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 4, header: 'Components', image: components, year: 2018, type: 'Components, Design', path: '', text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
  ]

  return (
    <main className={props.className}>
      <WorksWrapper>
        <Routes>
          <Route path='' element={<WorkLists works={works} />} />
          <Route path='design' element={<DesigningDashboard />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </WorksWrapper>
    </main>
  )
}

Works.propTypes = {
  className: PropTypes.string,
}

const WorksWrapper = styled.section`
  width: 682px;
  padding: 25px 0px 25px;

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding:0 20px 25px;
  }
`

export default styled(Works)`
  display: flex;
  justify-content: center;
  flex: 1 0 auto;
  width: 100%;
`
