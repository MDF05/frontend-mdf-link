/* eslint-disable react/prop-types */
import "../css/button.css"

import github from "react-social-icons/github"
import share from "react-social-icons/sharethis"
import youtube from "react-social-icons/youtube"

import { useEffect, useState } from "react"

import { dataContent } from "../service-API/content-API"
import { TableView } from "./TableContent.jsx"
import { SvgLogo } from "./SVGLogo.jsx"

function clickButtonContent(e, index) {
    const table = document.querySelectorAll(".toggle-view-table")
    const xCloseTable = document.querySelectorAll(".x-close-table")

    table.forEach((button) => {
        button.classList.add("hidden")
    })

    xCloseTable.forEach((xbutton) => {
        xbutton.classList.add("hidden")
        xCloseTable[index].classList.remove("flex")
    })

    xCloseTable[index].classList.remove("hidden")
    xCloseTable[index].classList.add("flex")
    table[index].classList.remove("hidden")
    table[index].scrollIntoView({ behavior: "smooth", block: "center" })

    xCloseTable[index].addEventListener("click", (element) => {
        element.stopPropagation()
        xCloseTable[index].classList.remove("flex")
        element.target.classList.add("hidden")
        element.target.parentElement.nextSibling.classList.add("hidden")
    })
}

function ElementLogoLink({ content, classStyle }) {
    return (
        <div className={`${classStyle} gap-1 left-0 header-link`}>
            <SvgLogo
                linkUrl={content.github}
                logoType={github}
                colorLogo="slate-800"
                bgcolor="bg-white"></SvgLogo>
            <SvgLogo
                linkUrl={content.youtube}
                logoType={youtube}
                colorLogo="red"
                bgcolor="bg-white"></SvgLogo>
            <SvgLogo
                linkUrl={content["other-link"]}
                logoType={share}
                colorLogo="grey"
                bgcolor="bg-white"></SvgLogo>
        </div>
    )
}

function AllContent({ inputSearch }) {
    const [dataApi, setDataApi] = useState(null)
    useEffect(() => dataContent(setDataApi), [])

    let dataClass = "bg-slate-800 order-2"
    let data
    if (dataApi) {
        console.log(dataApi)
        data = dataApi.myContent.map((content, i) => {
            let contentDate = content["tanggal-upload"]
            if (inputSearch.length !== 0) {
                if (contentDate.toLowerCase().trimEnd().match(inputSearch)) {
                    dataClass = "bg-green-900 order-1"
                } else {
                    dataClass = "bg-slate-800 order-2"
                }
            } else {
                dataClass = "bg-slate-800 order-2"
            }

            return (
                <button
                    key={i}
                    className={`w-11/12 border-white hover:border-slate-800 focus-within:border-slate-800  my-2 button-74 hover:bg-white hover:text-slate-800 active:bg-white focus-within:bg-white focus-within:text-slate-800 text-white button-table-link ${dataClass}`}
                    role="button"
                    onClick={(e) => clickButtonContent(e, i)}>
                    <div className="w-full flex justify-center items-center gap-5 relative header-link">
                        <ElementLogoLink
                            content={content}
                            classStyle="md:absolute md:flex hidden"></ElementLogoLink>
                        <span className="font-extrabold font-sans header-link search-date">
                            {contentDate}
                        </span>
                        <span
                            className={`absolute right-0 font-extralight font-mono text-4xl text-red-600 x-close-table hidden text `}
                            onClick={() => close}>
                            X
                        </span>
                    </div>
                    <div className="w-full hidden toggle-view-table pb-5 ">
                        <ElementLogoLink
                            content={content}
                            classStyle="md:hidden flex justify-center items-center"></ElementLogoLink>
                        <TableView content={content}></TableView>
                    </div>
                </button>
            )
        })
    }

    return <div className="flex justify-center flex-wrap">{data}</div>
}

export { AllContent }
