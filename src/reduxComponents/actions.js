const getAddressData = (obj) =>{
    return {
        type: "GETADDRESS",
        payload: obj
    }
}

const changeView = () =>{
    return {
        type: "CHANGEVIEW"
    }
}

const getViewedProduct = (id) =>{
    return  {
        type: "GETVIEWEDPRODUCT",
        payload: id
    }
}

const addItemToBag = (id) =>{
    return {
        type: "ADDTOBAG",
        payload: id
    }
}

const removeItemFromBag = (id) =>{
    return {
        type: "REMOVEFROMBAG",
        payload: id
    }
}

const clearBag = () => {
    return {
        type: "CLEARBAG"
    }
}

export default {
    getAddressData,
    changeView,
    getViewedProduct,
    addItemToBag,
    removeItemFromBag,
    clearBag,
}