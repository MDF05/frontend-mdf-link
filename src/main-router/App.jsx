import "./css/header-text-title.css"
import profileLarge from "../../public/assets/mdf-profile-large.jpg"

import { useState } from "react"
import { Link } from "react-router-dom"

import { AllContent } from "./component-App/ListContent"
import { HeaderSocialMedia } from "./component-App/HeaderSocial"
import { SearchLink } from "./component-App/SearcBar"

function App() {
    const [inputSearch, setInputSearch] = useState("")

    function updateInputSearch(inputText) {
        setInputSearch(inputText)
    }

    return (
        <div className="container-link container mx-auto pb-24">
            <div className="header-link bg-slate-800 flex justify-center flex-col items-center pb-5">
                <div className="flex justify-start w-full mt-3 ps-5 text-blue-500 capitalize">
                    <Link to="/admin-login" className="transition-all border-0 hover:border-b">
                        login admin
                    </Link>
                </div>
                <img
                    src={profileLarge}
                    alt="muhammad dava fahreza"
                    className="size-48 button-74 p-0 rounded-full"
                />
                <div className="mt-5 wrapper">
                    <div className="bg">MDF Link Tree</div>
                    <div className="fg">MDF Link Tree</div>
                </div>
                <HeaderSocialMedia></HeaderSocialMedia>
            </div>
            <div className="w-full bg-slate-800 p-2 my-4 border-solid">
                <SearchLink updateInputSearch={updateInputSearch} value={inputSearch}></SearchLink>
            </div>
            <div className="body-link">
                <AllContent inputSearch={inputSearch}></AllContent>
            </div>

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
        </div>
    )
}

export default App
