import styled from 'styled-components';
import {mobile} from '../../responsive'

export const Wrapper = styled.div`
 width: 380px;
    display: flex;
    flex-direction: column;

    ${mobile({
        width:"280px",
        marginBottom:"20px"
    })}
  
`
