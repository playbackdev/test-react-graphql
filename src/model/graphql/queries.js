import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query {
      posts(pagination: {limit:100}) {
        count
        data {
          id
          title
          body
          author {
            id
            name
          }
        }
      }
    }   
`;

export const GET_PROFILE = (userId) => gql`
    query {
      user(userId: ${userId}) {
        name
        email
        address {
          street
          suite
          city
          zipcode
        }
        phone
        website
        company {
          name
          catchPhrase
          bs
        }
      }
    }
`;