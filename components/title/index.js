import Head from 'next/head'
import React from 'react'

function Index(props) {
  const pageTitle = `${props.namepage} | ${props.company}`;
 
  return (
    <div>
        <Head>
            <title>{pageTitle}</title>
        </Head>
    </div>
  )
}

export default Index
