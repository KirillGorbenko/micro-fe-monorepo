export const getAllPosts = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await resp.json();
    } catch(error) {
        console.log(error)
    }
}