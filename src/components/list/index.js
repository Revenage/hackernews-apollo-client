import React from 'react'

import gql from "graphql-tag";
import { graphql } from 'react-apollo';

function List({ data: { links=[] } }) {

    console.log(222, links)
    return (
      <ul>
        {links.map(({ id, url }) => (
          <li key={id}>{url}</li>
        ))}
      </ul>
    );
  }
  
  export default graphql(gql`
    query LinksQuery {
      links {
        id
        url
        description
      }
    }
  `)(List);