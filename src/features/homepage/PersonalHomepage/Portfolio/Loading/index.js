import { LoaderParagraph, LoadingArticle, LoadingIcon, LoadingIconCircle } from "./styled";

const Loading = () => (
    // <LoadingArticle>
    //     <LoadingIcon />
    //     <LoaderParagraph>Please wait, projects are being loaded...</LoaderParagraph>
    // </LoadingArticle>
    <LoadingArticle>
        <LoaderParagraph>Please wait, projects are being loaded...</LoaderParagraph>
        <LoadingIconCircle><LoadingIcon /></LoadingIconCircle>
    </LoadingArticle>
);

export default Loading;