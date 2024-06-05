import { Link } from "react-router-dom"
import { getAllData } from "./services-API/admin-API"
import { useEffect, useState } from "react"
import SearchAdmin from "./SearchAdmin"

function sendDataContent(index) {
    const formContent = document.querySelector(`.table-content-${index}`)
    const queryContent = Array.from(formContent.querySelectorAll(".properti-content"))
    // const queryUsername = Array.from(formContent.querySelectorAll(".properti-username"))

    const formData = {
        _id: queryContent[0].textContent,
        "tanggal-upload": queryContent[1].textContent,
        topic: queryContent[2].textContent,
        judul: queryContent[3].textContent,
        deskripsi: queryContent[4].textContent,
        tools: queryContent[5].textContent,
        github: queryContent[6].textContent,
        youtube: queryContent[7].textContent,
        "other-link": queryContent[8].textContent,
        tipe: queryContent[9].textContent,
        __v: queryContent[10]?.textContent || 0,
    }

    fetch(import.meta.env.VITE_update_content, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((response) => console.log(response))
}

function deleteContent(index) {
    const formContent = document.querySelector(`.table-content-${index}`)
    const idContent = formContent.querySelector(".properti-content").textContent

    fetch(import.meta.env.VITE_delete_content + `/${idContent}`, { method: "DELETE" })
        .then((e) => e.json())
        .then((e) => console.log(e))
}

function Admin() {
    const [element, setElement] = useState([])
    const [edittable, setEdittable] = useState(false)
    useEffect(() => getAllData(setElement), [])

    let viewElement
    let allProperty
    if (element) {
        viewElement = element.map((data, i) => {
            allProperty = Object.getOwnPropertyNames(data)
            return (
                <div
                    className={`w-full mb-32 border border-black table-content-${i} search-table order-2`}
                    key={i}>
                    {allProperty.map((properti, index) => {
                        return (
                            <div key={index} className="w-full flex text-wrap text-left my-5">
                                <div className="w-2/12 properti-username">{properti}</div>
                                <div className="w-1/12">:</div>
                                <div
                                    className="w-9/12 properti-content border border-black"
                                    contentEditable={edittable}
                                    onDoubleClick={() => setEdittable(!edittable)}>
                                    {data[properti]}
                                </div>
                                <div className="w-1/12 text-end pr-5">copy</div>
                            </div>
                        )
                    })}
                    <div className={`flex justify-center gap-5`}>
                        <button
                            type="submit"
                            role="button"
                            className="bg-green-500 border-2 px-2 rounded-xl border-black"
                            onClick={() => sendDataContent(i)}>
                            submit
                        </button>
                        <button
                            type="submit"
                            role="button"
                            className="bg-red-500 border-2 px-2 rounded-xl border-black"
                            onClick={() => deleteContent(i)}>
                            delete
                        </button>
                        <button
                            type="reset"
                            role="button"
                            className="bg-orange-500 border-2 px-2 rounded-xl border-black"
                            onClick={() => location.reload()}>
                            cancel
                        </button>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <div className="flex justify-center my-12">
                <Link className="button-74 bg-blue-400" to="/admin-dava/create-content">
                    new content
                </Link>
            </div>
            <SearchAdmin></SearchAdmin>
            <div className="flex flex-col">{viewElement}</div>
        </div>
    )
}

export default Admin