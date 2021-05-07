const initialState = {
    currentAddress: null,
    sectionView: false,
    sokoStore: [
        {id: 1, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-hXG6TeA0DDUKJfkC2FAegD4yq6nuRbyag&usqp=CAU", quantity: 1, name: "Master Bed luxury", price: 2700, discount: 3500 },
        {id: 2, imageSrc: "https://www.thespruce.com/thmb/FfqwnAT8p-wVQQSgORyOxtLCLtc=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/sheets-58a6a1f43df78c345b10ba74.jpg", quantity: 1, name:"Royal white queen sheets", price: 80, discount: 125 },
        {id: 3, imageSrc: "https://www.iwc.com/content/dam/homepage/ww-2021/IW503605_tile_1.717.jpg.transform.article_image_335_2x.jpeg", quantity: 1, name: "Men's blue watch", price: 280, discount: 340 },
        {id: 4, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VGM2vGykq8J1sykUti5Ws_D8WcKFkW1T9Q&usqp=CAU", quantity: 1, name: "Silver merchant neckpiece", price: 450, discount: 550 },
        {id: 5, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4olLYV51yuyta-2lDjD0dCtqHxgPfynyjwQ&usqp=CAU", quantity: 1, name: "Army green Cargo pants", price: 60 },
    ],
    bag: [],
    bagTotal: 0,
    bagTotalDis: 0,
    viewedProduct: [],
    bagQuantity: 0
}

export const sokoReducer = (state = initialState, action) =>{
        const specialItem = state.sokoStore.find(item => item.id === action.payload)
        const itemInBag = state.bag.find(item => item.id === action.payload)

        switch(action.type) {
            case "GETADDRESS":
                return {
                    ...state,
                    currentAddress: action.payload
                }
            case "CHANGEVIEW":
                return {
                    ...state,
                    sectionView: !state.sectionView
                }
            case "GETVIEWEDPRODUCT": 
                return {
                    ...state,
                    viewedProduct: state.sokoStore.filter(item => item.id === action.payload)
                }
            case "ADDTOBAG":
                return {
                    ...state,
                    bag: !itemInBag ? [...state.bag, specialItem] : state.bag.map(item => item.id  === specialItem.id ? {...item, quantity: item.quantity + 1 } : {...item}),
                    bagTotal: state.bagTotal + specialItem.price,
                    bagTotalDis: state.bagTotalDis + specialItem.discount,
                    bagQuantity: state.bagQuantity + 1
                }
            case "REMOVEFROMBAG":
                return {
                    ...state,
                    bag: state.bag.filter(item => item.id !== action.payload),
                    bagTotal: state.bagTotal - specialItem.price,
                    bagTotalDis: state.bagTotalDis - specialItem.discount,
                    bagQuantity: state.bagQuantity - itemInBag.quantity
                }
            case "CLEARBAG":
                return {
                    ...state,
                    bag: [],
                    bagTotal: 0,
                    bagTotalDis: 0,
                    bagQuantity: 0
                }
            case "INCREASEQUANTITY": 
                return {
                    ...state,
                    bag: state.bag.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : {...item}),
                    bagQuantity: state.bagQuantity + 1,
                    bagTotal: state.bagTotal + itemInBag.price,
                    bagTotalDis: state.bagTotalDis + itemInBag.discount
                }
            case "DECREASEQUANTITY":
                return {
                    ...state,
                    bag: state.bag.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : {...item}),
                    bagQuantity: state.bagQuantity - 1,
                    bagTotal: state.bagTotal - itemInBag.price,
                    bagTotalDis: state.bagTotalDis - itemInBag.discount
                }    
            default:
                return state;
        }
}