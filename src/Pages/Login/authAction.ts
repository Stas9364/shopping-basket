export enum AUTH {
    LOGOUT = 'LOGOUT'
}

export type AuthActionsType = ReturnType<typeof logoutAC>

export const logoutAC = () => ({type: AUTH.LOGOUT} as const);