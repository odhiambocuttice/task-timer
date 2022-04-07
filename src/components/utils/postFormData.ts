// import axios from "axios";

// export const postFormData = async (data: { [k: string]: any }, url: string) => {
//     const requestOptions = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),

//     }
//     const response: Response = await axios.post(url, requestOptions)
//     const result = await response.json()
//     return { response, result }
// }

export const postFormData = async (data: { [k: string]: any }, url: string) => {
    const requestOptions: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
    const response = await fetch(url, requestOptions)
    const result = await response.json()
    return { response, result }
}