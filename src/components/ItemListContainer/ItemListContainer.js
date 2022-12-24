import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({title}) => {
    return(
        <>
        <h1>{title}</h1>
        <ItemCount maxStock={5}/>
        </>
    )
}

export default ItemListContainer
