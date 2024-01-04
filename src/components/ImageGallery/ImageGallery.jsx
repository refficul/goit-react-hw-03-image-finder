import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryStyled } from "./ImageGallery.styled";


export const ImageGallery = ({images}) => {

    

    return (
        <ImageGalleryStyled>
            {images.map(image => <ImageGalleryItem key={image.id} imgs={image}/>)}
        </ImageGalleryStyled>
    )
}
