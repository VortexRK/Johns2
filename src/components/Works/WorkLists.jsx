import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import WorksList from './WorksList'

const WorkLists = props => {
  const {works} = props
  return (
    <div className={props.className}>
      <Header> Work </Header>
      {works.map(work => <WorksList work={work} key={work.id} path={work.path} />)}
    </div>
  )
}

WorkLists.propTypes = {
  className: PropTypes.string,
  works: PropTypes.array,
}

const Header = styled.h1`
  font-size: 44px;
  font-weight: 900;
  line-height: 60px;
  margin: 0 0 30px;

  @media (max-width: 720px) {
    font-size: 35px;
  }
`

export default WorkLists