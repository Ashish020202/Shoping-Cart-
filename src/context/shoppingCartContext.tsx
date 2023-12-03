import { createContext,ReactNode, useContext, useState} from "react";

type shoppingCartProviderProps={
    Children:ReactNode;
}

type shoppingCartContext={
    getItemQuantity:(id:number)=>number;
    IncreseCartQuantity:(id:number)=>number;
    DecreaseCartQuantity:(id:number)=>number;
    removeCart:(id:number)=>number;
    
}

type cart ={
    id:number;
    quantity:number;
}

const shoppingCartContext = createContext({}as shoppingCartContext);

export function useshoppingCartContext(){
     return useContext(shoppingCartContext);
}

export function shoppingCartProvider({Children}:shoppingCartProviderProps){
    const [cartItem,setcartItem]=useState([]);

    function getItemQuantity(){
        
    }

    return( 
    <shoppingCartContext.Provider value={{}}>
        {Children}
    </shoppingCartContext.Provider>
    )
}