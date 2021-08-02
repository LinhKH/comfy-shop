import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { useFilterContext } from '../context/filter_context'
import searchIcon from '../assets/searchicon.png';

const PageHero = ({ title, product }) => {
    const history = useHistory()
    let currentUrl = history.location.pathname
    const {
        filters: {
            text
        },
        updateFilters
    } = useFilterContext()

    return (
        <Wrapper>
            <div className='section-center'>
                <h3>
                    <Link to='/'>Home </Link>
                    { product && <Link to='/products'>/ Products</Link> } / {title}
                </h3>
                { currentUrl === '/products' ? <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" name="text" value={text} placeholder="Search.." onChange={updateFilters}></input>
                </form> : '' }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  input[type=text] {
    float:right;
    width: 130px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background: var(--clr-grey-10);
    border-color: transparent;
    background-image: url(${searchIcon});
    background-size: 30px;
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }
  
  input[type=text]:focus {
    width: 50%;
  }

`

export default PageHero
