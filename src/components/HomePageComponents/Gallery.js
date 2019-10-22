import React, { useState } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { styles, Section } from "../../utils"

const SINGLE_IMAGE = graphql`
  {
    getImages: allFile(filter: { relativeDirectory: { eq: "homeGallery" } }) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Gallery = () => {
  const [texts, setTexts] = useState([
    "awesome pizza",
    "awesome pork",
    "awesome stake",
  ])

  return (
    <StaticQuery
      query={SINGLE_IMAGE}
      render={data => {
        return (
          <Section>
            <GalleryWrapper>
              {data.getImages.edges.map((item, index) => {
                return (
                  <div className={`item item-${index + 1}`} key={index}>
                    <Image fluid={item.node.childImageSharp.fluid} />
                    <p className="info">{texts[index]}</p>
                  </div>
                )
              })}
            </GalleryWrapper>
          </Section>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;

  .item {
    position: relative;
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    background: ${styles.colors.mainYellow};
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-areas:
      "one one two two"
      "one one three three";

    .gatsby-image-wrapper {
      height: 100%;
    }

    .item-1 {
      grid-area: one;
    }

    .item-2 {
      grid-area: two;
    }

    .item-3 {
      grid-area: three;
    }
  }
`

export default Gallery
