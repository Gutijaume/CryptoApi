import styled from 'styled-components'

export const ProfileImg = styled.img`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
    & img {
    display: inline-block;
      position: relative;
      width: 200px;
      height: 200px;
      overflow: hidden;
      border-radius: 50%;
    }
}
`