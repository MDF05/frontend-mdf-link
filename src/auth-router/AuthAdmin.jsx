import { useState } from "react"
import { alertItem } from "../main-router/service_javascript/alertItem"
import { Link } from "react-router-dom"

function AdminLogin() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function hadleSubmitAdmin(event) {
        event.preventDefault()

        const formData = {
            username,
            password,
        }

        fetch("http://localhost:3000/my-auth", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((response) => {
                const aPageAdmin = document.querySelector("a.page-admin")
                const succes = response.succes
                if (succes) aPageAdmin.click()
                else {
                    alertItem(response.message, "bg-red-500")
                }
            })
    }

    return (
        <div className="flex w-full h-screen justify-center items-center p-1 md:p-0">
            <form onSubmit={hadleSubmitAdmin} className="flex flex-col w-96 gap-5 form-login-admin">
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={username}
                    required
                    onChange={(el) => setUserName(el.target.value)}
                    className="border border-black"
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    onChange={(el) => setPassword(el.target.value)}
                    className="border border-black"
                />
                <button type="submit" className="bg-blue-400 border border-black">
                    login
                </button>
            </form>
            <div className="alert-component hidden">
                <div className="flex items-center fixed top-5 lg:right-5 right-2 button-74 rounded-none pb-1 pr-12 overflow-hidden scale:90 w-10/12 sm:w-6/12 md:w-max container-alert">
                    <h5 className="leading-none py-4">selamat berhasil menyalin</h5>
                    <span className="absolute right-0 button-74 hover:bg-red-800 scale-50 bg-red-400 rounded-none x-alert-copy">
                        X
                    </span>
                    <meter
                        className="absolute w-full scale-110 left-0"
                        min="0"
                        max="3"
                        low="2"
                        optimum="3"
                        high="1"
                        style={{ bottom: "-9px" }}></meter>
                </div>
            </div>
            <Link to="/page-admin" className="page-admin hidden" aria-disabled>
                admin page
            </Link>
        </div>
    )
}

export default AdminLogin
