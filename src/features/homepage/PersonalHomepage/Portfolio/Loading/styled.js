import styled from "styled-components";
import { ReactComponent as Loading } from "../../icons/icon-spinner.svg";
import { ErrorArticle, Paragraph } from "../Error/styled";

export const LoadingArticle = styled(ErrorArticle)`
    max-width: 475px;
    margin: 88px 0 140px;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        margin: 24px 0 48px;
    };
`;

export const LoaderParagraph = styled(Paragraph)``;

export const LoadingIconCircle = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 100%;
    border: 11.375px solid ${({ theme }) => theme.color.circleLoader};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 80px;
        height: 80px;
        border: 5.6875px solid ${({ theme }) => theme.color.circleLoader};
    };
`;


export const LoadingIcon = styled(Loading)`
position: absolute;
color: ${({ theme }) => theme.color.elipseLoader};
animation-name: rotate;
animation-duration: 2s;
animation-iteration-count: infinite;
animation-timing-function: linear;

@keyframes rotate {
    from{
        transform: rotate(0deg);
    };
    to{
        transform: rotate(360deg);
    };
};

@media ( max-width: ${({ theme }) => theme.media.mobileMax}px) {
        width: 80px;
        height: 80px;
    };
`;