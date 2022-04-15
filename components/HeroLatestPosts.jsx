import React from "react"
import Postcard from "./PostCard"
import { Button, Card, Col, Grid, Row, Text, useTheme } from "@nextui-org/react"

/* 
{
  posts.map((post, i) => <Postcard post={post} key={i} />)
} */
const MockItem = ({ post }) => {
  return (
    <Card cover hoverable clickable css={{ w: "100%", p: 0 }}>
      <Card.Body>
        <Card.Image
          src={post.image}
          height={400}
          width="100%"
          alt={post.title}
        />
      </Card.Body>
      <Card.Footer
        blur
        css={{
          position: "absolute",
          bgBlur: "#0f1114",
          borderTop: "$borderWeights$light solid $gray700",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              {post.category || "Category"}
            </Text>
            <Text h4 color={post.title.color || "white"}>
              {post.title}
            </Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}
const HeroLatestPosts = ({ posts }) => {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <Grid.Container
      gap={2}
      justify="center"
      css={{
        d: "grid",
        maxW: "800px",
        gridAutoColumns: "1fr",
        gridTemplateAreas: `'div0 .'
                            'div0 div1'
                            'div2 div1'
                            'div2 div3'
                            'div4 div3'
                            'div4 div5'
                            '. div5'`,
      }}
    >
      {posts.map((post, i) => (
        <Grid css={{ gridArea: `div${i}` }}>
          <MockItem post={post} />
        </Grid>
      ))}
    </Grid.Container>
  )
}

export default HeroLatestPosts
