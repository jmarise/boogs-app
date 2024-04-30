import styled from 'styled-components';

export const Box = styled.div`
    padding: 5px 6px; /* Adjusted padding */
    background: black;
    position: fixed; /* Changed from absolute to fixed */
    bottom: 0;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    padding: 5px 6px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 20px;
    flex: 1;/* Adjusted margin */
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`;

export const FooterLink = styled.a`
    color: #fff;
    margin-bottom: 10px; /* Adjusted margin */
    font-size: 16px; /* Adjusted font size */
    text-decoration: none;

    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;

export const Heading = styled.p`
    font-size: 20px; /* Adjusted font size */
    color: #fff;
    margin-bottom: 20px; /* Adjusted margin */
    font-weight: bold;
    display: inline;
`;