import Cookies from 'js-cookie'

// App
const sidebarStatusKey = 'sidebar_status'
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey)
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(sidebarStatusKey, sidebarStatus)

const languageKey = 'language'
export const getLanguage = () => Cookies.get(languageKey)
export const setLanguage = (language: string) => Cookies.set(languageKey, language)

const sizeKey = 'size'
export const getSize = () => Cookies.get(sizeKey)
export const setSize = (size: string) => Cookies.set(sizeKey, size)

// User
const tokenKey = 'main_token'
const chatTokenKey = 'chat_token'
const chatWebSocketSessionKey = 'chat_ws_session'
const chatUserIdKey = 'chat_uid'
export const getToken = () => Cookies.get(tokenKey)
export const getChatToken = () => Cookies.get(chatTokenKey)
export const getChatWebSocketSession = () => Cookies.get(chatWebSocketSessionKey)
export const getChatUserId = () => Cookies.get(chatUserIdKey)
export const setToken = (token: string) => Cookies.set(tokenKey, token)
export const setChatToken = (token: string) => Cookies.set(chatTokenKey, token)
export const setChatWebSocketSession = (session: string) => Cookies.set(chatWebSocketSessionKey, session)
export const setChatUserId = (uid: string) => Cookies.set(chatUserIdKey, uid)
export const removeToken = () => Cookies.remove(tokenKey)
export const removeChat = () => {
    Cookies.remove(chatTokenKey);
    Cookies.remove(chatUserIdKey);
    Cookies.remove(chatWebSocketSessionKey);
}
