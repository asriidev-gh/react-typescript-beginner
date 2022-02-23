import React, { createContext, useState } from 'react'

export type AuthUser = {
	name: string
	email: string
}

type UserContextType = {
	user: AuthUser | null
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

type UserContextProviderProps = {
	children: React.ReactNode
}

// export const UserContext = createContext<UserContextType | null>(null); //allows null 
export const UserContext = createContext({} as UserContextType); //type assertion

export const UserContextProvider = ({children} : UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null) //sample of union type
	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}