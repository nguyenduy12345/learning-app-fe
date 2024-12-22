import { useState, createContext} from "react";

export const LoadingContext = createContext({})

const LoadingContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false)
    return(
        <LoadingContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}
export default LoadingContextProvider
