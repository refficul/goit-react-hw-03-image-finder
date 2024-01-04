import { LoadMoreBtn } from "./Button.styled";

export const LoadMore = ({onClick}) => {
    return (
        <LoadMoreBtn onClick={onClick}>
            Load More
        </LoadMoreBtn>
    )
}