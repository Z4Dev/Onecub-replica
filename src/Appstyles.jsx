import styled from 'styled-components';
import Background from './assets/Background.png';

export const Container = styled.div`
    min-height: 100vh;
    background-image: 
    linear-gradient(0, #121212 0%, rgba(18, 18, 18, 0.7) 15%, rgba(18, 18, 18, 0) 25%),
    linear-gradient(180deg, #121212 0%, rgba(18, 18, 18, 0.7) 15%, rgba(18, 18, 18, 0) 50%),
    url(${Background});

    #Logo {
        margin-top: 18px;
        width: 312px;
        height: 71px;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;

    nav {
        display: flex;
    }

    ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li { 
        margin: 0 20px;
        margin-top: 50px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;

        letter-spacing: 1px;
        text-transform: uppercase;
        
        color: #CACACA;;
    }

    @media (max-width: 478px) {
        #Logo {
            margin-top: 25px;
            width: 200px;
            height: 71px;
        }

        li { 
            margin: 0 10px;
            margin-top: 30px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
    
            letter-spacing: 1px;
            text-transform: uppercase;
            
            color: #CACACA;;
        }
    }
`;

export const Forms = styled.div`

    position: absolute;
    top: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;

    height: 418px;
    background: rgba(38, 38, 38, 0.8);
    border: 1px solid rgba(122, 122, 122, 0.5);
    backdrop-filter: blur(2.5px);
    border-radius: 12px;

    #Logo2 {
        margin-top: 35px;
        max-width: 110px;
        height: 25px;
    }

    #connecterror {
        margin-top: 20.49px;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.6);
    }
`;

export const Form = styled.form`
    margin: 20px 28px 0 28px;
    label {
        color: white;
        font-style: normal;
        font-weight: medium;
        font-size: 13px;
        line-height: 24px;
    }

    input {
        display: flex;
        flex-direction: column;
        width: 376px;
        height: 39px;

        background: rgba(38, 38, 38, 0.8);
        border: 1px solid rgba(122, 122, 122, 0.5);
        backdrop-filter: blur(5px);
        border-radius: 3px;
        transition: all 500ms;
        color: rgba(255, 255, 255, 0.6);
        padding-left: 12px;
        margin-bottom: 20px;
    }

    input:focus {
        outline: none;
    }

    @media (max-width: 498px) {
        input {
            width: 276px;
            height: 39px;
        }
    }
`;


export const FormCheck = styled.div`
    width: 376px;

    display: flex;
    flex-direction: row;
    align-items: left;

    label {
        color: rgba(255, 255, 255, 0.8);
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 24px;
    }

    .customcheckbox input {
        display: none;
    }

    .customcheckbox input + label:before {
        vertical-align: middle;
        content: "";
        width: 15px;
        height: 15px;
        border-radius: 2px;
        background: rgba(38, 38, 38, 0.8);
        border: 1px solid rgba(122, 122, 122, 0.5);
        backdrop-filter: blur(5px);
        border-radius: 3px;
        display: inline-block;
        margin-right: 8px;
    }

    .customcheckbox input:checked + label:before {
        background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
        background-color: rgba(71, 71, 71, 0.3);
        backdrop-filter: blur(5px);
        background-position: center;
        border: none;
        border: 1px solid rgba(122, 122, 122, 0.5);
    }

    @media (max-width: 498px) {
        width: 276px;
        height: 39px;
    }
`

export const Button = styled.button`
    margin: 20px 28px 0 28px;
    width: 376px;
    height: 48px;
    background: linear-gradient(90deg, #FFD465 0%, #F8A528 100%);
    box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.05), 0px 2px 0px #78350F, inset 0px 2px 0px rgba(255, 255, 255, 0.4);
    border-radius: 6px;

    color: #78350F;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #F8A528 0%, #FFD465 100%);
    }


    @media (max-width: 498px) {
        width: 276px;
        height: 39px;
    }
`

export const SocialMedias = styled.div`
    position: absolute;
    top: 80%;
    display: flex;
    flex-direction: row;
`

export const SocialMedia = styled.div`
    width: 238px;
    margin-right: 56px;
    height: 72px;
    display: flex;
    align-items: center;
    background: rgba(71, 71, 71, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 12px;

    .content {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .content img {
        margin: 16px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .title {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FAFAFA;
    }

    .subtitle {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #737373;
    }

    @media (max-width: 1180px) {
        width: 200px;
        margin-right: 45px;
    }

    @media (max-width: 1004px) {
        width: 200px;
        margin-right: 25px;
    }

    @media (max-width: 900px) {
        display: none;
    }

    @media screen and (max-height: 805px) {
        display: none;
    }
`

export const BottomText = styled.p`
    @media (max-width: 800px) {
        display: none;
    }

    color: #737373;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    position: absolute;
    bottom: 0;
    left: ${props => props.position == "left"? "25px":"87%"}
`