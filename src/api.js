const POLICY_END_POINT = 'http://127.0.0.1:9000/policy-service'
const USER_END_POINT = 'http://127.0.0.1:9000/user-service'

export const policyRequest = async(url) => {
    try {
        const res = await fetch(`${POLICY_END_POINT}${url}`)

        if(!res.ok) {
            throw new Error('API 호출 실패')
        }
        return await res.json()
    } catch (e) {
        alert(e.message)
    }
}

export const userRequest = async(url) => {
    try {
        const res = await fetch(`${USER_END_POINT}${url}`)

        if(!res.ok) {
            throw new Error('API 호출 실패')
        }
        return await res.json()
    } catch (e) {
        alert(e.message)
    }
}