export default function Signup() {

    async function postFetch(body) {
        await fetch('http://localhost:4000/users/create', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
            name: e.target.elements.userName.value,
            nickname: e.target.elements.nickname.value,
            avatar: e.target.elements.avatar.value,
        }
        postFetch(body)
        e.target.reset()
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <label htmlFor="email">email</label>
            <input type="email" id="email"/>
            <label htmlFor="userName">userName</label>
            <input type="text" id="userName"/>
            <label htmlFor="nickname">nickName</label>
            <input type="text" id="nickname"/>
            <label htmlFor="password">password</label>
            <input type="password" id="password"/>
            <label htmlFor="avatar">avatar</label>
            <input type="text" id="avatar"/>
            <button type="submit">Submit</button>
        </form>
    )
}