import axios from 'axios'

const URL = '/api/users'

interface RegistrationParams {
    username: string,
    password: string,
    name: string
}

interface RegisteredUser {
    username: string,
    password: string,
    error: string
}

const register = async (credentials: RegistrationParams) => {
    const response = await axios.post<RegisteredUser>(URL, credentials)

    if (response.data.error) {
        throw new Error(response.data.error)
    }
    if (response.data.username === credentials.username) {
        return true
    }
    return response.data
}

export default register
