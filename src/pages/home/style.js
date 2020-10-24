import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background:${props => props.theme.primaryColor};

    header{
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 0px;

        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;

        #switch{
            margin-left: 20px;
        }
        span{
            display: flex;
            align-items: center;
            a{
            font-size: 14px;
            margin: 10px;
            }
            svg{
                margin-right: 10px;
                font-size: 30px;
                padding-bottom: 5px;
            }
            a{
                color: ${props => props.theme.headerLink};
            }
            svg {
                cursor: pointer;

                path{
                    color: ${props => props.theme.headerMenu};
                }
            }
            img{
                width: 40px;
                border-radius: 360px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 20px;
            }
        }
    }
    .svg{
        margin: 0px 10px 0px 5px;
        font-size: 18px;
        opacity: 0.5;
        cursor: pointer;
        path{
            color: ${props => props.theme.inputIconColor};
        }
    }
    #logo{
        margin-bottom: 30px;
    }
    #input{
        display: flex;
        align-items: center;
        justify-content: space-around;
        border: 1px solid ${props => props.theme.inputDetail};
        border-radius: 30px;
        padding: 8px;
        margin-bottom: 30px;
        input{
            width: 460px;
            height: 28px;
            font-size: 14px;
            background: ${props => props.theme.primaryColor};
            color: ${props => props.theme.text};
        }
        &:hover {
            box-shadow: 0px 0px 7px ${props => props.theme.inputDetail};
        }
        .icons{
          display: flex;
          align-items: center;
        }
    }
    #buttons{
        display: flex;
        align-items: center;
        button{
            margin: 0px 6px 30px;
            padding: 8px 15px;
            background: ${props => props.theme.buttonBackground};
            color: ${props => props.theme.buttonFontColor};
            font-size: 14px;
            cursor: pointer;
        }
    }
    p{
        font-size: 13px;
        color: ${props => props.theme.text};
        a{
            color: ${props => props.theme.link};
        }
    }
    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        div{
            background: ${props => props.theme.footerBackground};
            border: 1px solid ${props => props.theme.footerBorder};
            padding: 10px;
            display: flex;
            justify-content: space-between;

            p, a{
                margin: 0px 15px;
            }

            a, p{
                font-size: 14px;
                color: ${props => props.theme.footerFontColor};
            }
        }
    }
@media(max-width:800px){
  .hidden{
      display: none;
    }
  #logo{
    width: 60%;
  }
  footer{
    display: flex;
    align-items: center;
    flex-direction: column;
    div{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
  #input{
    width: 90%;
  }
}
@media(max-width: 324px){
  #input{
    width: 90%;
    svg{
      display: none;
    }
  }
}
`