import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    header{
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px 0px;

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
                color: rgba(0, 0, 0, 0.7);
            }
            svg > path{
                color: rgba(0, 0, 0, 0.6)
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
    .svg{
        margin: 0px 10px 0px 5px;
        font-size: 18px;
        opacity: 0.5;
        cursor: pointer;
    }
    #logo{
        margin-bottom: 30px;
    }
    #input{
        display: flex;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        padding: 8px;
        margin-bottom: 30px;
        input{
            width: 460px;
            height: 28px;
            font-size: 14px;
        }
        &:hover {
            box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2)
        }
    }
    #buttons{
        display: flex;
        align-items: center;
        button{
            margin: 0px 6px 30px;
            padding: 8px 15px;
            background: #f8f9fa;
            color: #3c4043;
            font-size: 14px;
            cursor: pointer;

            &:hover{
                outline: #f8f9fa 1px solid;
            }
        }
    }
    p{
        font-size: 13px;
        a{
            color: #609;
        }
    }
    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        div{
            background: #f2f2f2;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 10px;
            display: flex;
            justify-content: space-between;

            p, a{
                margin: 0px 15px;
            }

            a, p{
                font-size: 14px;
                color: rgba(0, 0, 0, 0.54);
            }
        }
    }
`