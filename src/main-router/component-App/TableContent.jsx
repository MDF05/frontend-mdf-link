import { CopyContent } from "./CopyItem"

/* eslint-disable react/prop-types */

function CreateTable({
    content,
    topic,
    wtTextLg = "lg:w-2/12",
    wtLinkLg = "lg:w-8/12",
    none = "",
}) {
    if (content === "none") return null

    const contentList = topic === "other-link" ? content.split(",") : [content]

    let linkUrl
    let filterText
    let isNone
    let linkText
    const elemenTabel = contentList.map((data, index) => {
        linkUrl = data
        filterText = topic + none
        if (data.indexOf("~") !== -1) {
            const splitData = data.split("~")
            filterText = splitData[0]
            linkUrl = splitData[1]
        }
        isNone = filterText.indexOf("none") !== -1
        linkText = filterText.replace("none", "")
        return (
            <div
                key={index}
                className="flex flex-wrap text-wrap border-b-2 border-solid border-red-500 w-full items-center justify-between">
                <div className={`${wtTextLg} w-9/12 order-1 font-extrabold`}>
                    {linkText} <span className="lg:hidden "> :</span>
                </div>
                <div className="lg:w-1/12 lg:flex order-2 hidden">:</div>
                <div
                    className={`${wtLinkLg} lg:order-3 flex w-full flex-wrap text-wrap order-4 break-words`}>
                    {isNone ? (
                        <span className={`w-full`}>{linkUrl}</span>
                    ) : (
                        <a href={linkUrl} className={`text-blue-500 w-full`}>
                            {linkUrl}
                        </a>
                    )}
                </div>
                <div className="lg:w-1/12 lg:order-4 w-3/12 copy-item order-3 flex justify-end ">
                    <CopyContent linkURL={linkUrl} nameitem={linkText} />
                </div>
            </div>
        )
    })

    return <div>{elemenTabel}</div>
}

function nextTable(e) {
    e.target.parentElement.nextSibling.classList.toggle("hidden")
}

function TableView({ content }) {
    return (
        <div className="leading-9 mt-6">
            <div className="w-full text-start flex-wrap">
                <CreateTable content={content.github} topic={"github"}></CreateTable>
                <CreateTable content={content.youtube} topic={"youtube"}></CreateTable>
                <CreateTable content={content["other-link"]} topic={"other-link"}></CreateTable>
            </div>
            <div
                className="my-10 font-bold font-mono w-full bg-white button-74 hover:bg-yellow-400 button-body-link"
                onClick={(e) => nextTable(e)}>
                <h4 className="button-body-link">informasi lainnya </h4>
            </div>
            <div className="w-full text-start hidden">
                <CreateTable
                    content={content.judul}
                    topic="judul"
                    none="none"
                    wtTextLg="lg:w-1/12"
                    wtLinkLg="lg:w-9/12"></CreateTable>
                <CreateTable
                    content={content.topic}
                    topic="topic"
                    none="none"
                    wtTextLg="lg:w-1/12"
                    wtLinkLg="lg:w-9/12"></CreateTable>
                <CreateTable
                    content={content.deskripsi}
                    topic="deskripsi"
                    none="none"
                    wtTextLg="lg:w-1/12"
                    wtLinkLg="lg:w-9/12"></CreateTable>

                <CreateTable
                    content={content.tools}
                    topic="tools"
                    none="none"
                    wtTextLg="lg:w-1/12"
                    wtLinkLg="lg:w-9/12"></CreateTable>
                <CreateTable
                    content={content.tipe}
                    topic="tipe"
                    none="none"
                    wtTextLg="lg:w-1/12"
                    wtLinkLg="lg:w-9/12"></CreateTable>
            </div>
        </div>
    )
}

export { TableView }
