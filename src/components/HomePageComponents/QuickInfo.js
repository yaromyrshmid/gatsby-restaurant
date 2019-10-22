import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { styles } from "../../utils/"

import { Section, Title, SectionButton } from "../../utils"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfoWrapper>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          consectetur tempore natus praesentium enim quisquam, eius, beatae
          nesciunt sapiente exercitationem dicta soluta error. Fuga soluta,
          illum debitis ducimus maiores aperiam.
        </p>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>About</SectionButton>
        </Link>
      </QuickInfoWrapper>
    </Section>
  )
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;

  p {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
