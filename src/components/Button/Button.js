import { LoadBtn } from './Button.styled';

const LoadMoreBtn = ({onClick}) => {
    return (
        <LoadBtn type="button" onClick={() => onClick()}>Load more</LoadBtn>
    )
}

export default LoadMoreBtn;