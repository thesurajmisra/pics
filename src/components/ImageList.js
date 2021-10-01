import React from 'react'

const ImageList = (props) => {
    const Images = props.images.map(({description,id,urls}) => {
        return <img key={id} alt={description} src={urls.regular}/>
    })

    return <div>{Images}</div>
}

export default ImageList
