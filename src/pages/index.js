// Step 1: Import React
import * as React from 'react'
import Layout from './layout'
// Step 2: Define the component.
const IndexPage = () => {
  return (
    <Layout pageTitle = "Home Page">
      <h2>Welcome to the 2022 Blog</h2>
      <p>Follow my journey with my future self</p>
    </Layout>
  )
}

// Step 3: Export component
export default IndexPage