import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";
import {
    GitHubIcon,
    PortfolioArticle,
    PortfolioHeader,
    PortfolioSection,
    PortfolioSubHeader
} from "./styled";
import {
    fetchLoadingReposLoading,
    selectStatus
} from "../../personalHomepageSlice";
import { useEffect } from "react";

const Portfolio = () => {
    const dispatch = useDispatch();

    const status = useSelector(selectStatus)

    useEffect(() => {
        dispatch(fetchLoadingReposLoading());
    }, [dispatch]
    );

    return (
        <PortfolioSection>
            <PortfolioArticle>
                <GitHubIcon />
                <PortfolioHeader>Portfolio</PortfolioHeader>
                <PortfolioSubHeader>my recent projects</PortfolioSubHeader>
            </PortfolioArticle>
            {status === "loading" && <Loading />}
            {status === "error" && <Error />}
            {status === "success" && <Success />}
        </PortfolioSection>
    );
};

export default Portfolio;