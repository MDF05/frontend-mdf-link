import { Link } from "react-router-dom"

export default function CreateContents() {
    return (
        <div className="flex justify-center items-center flex-col pt-10">
            <form action={import.meta.env.VITE_api_content} method="post" className="w-full">
                <div className=" w-full flex mb-10">
                    <label htmlFor="tanggal-upload" className="w-2/12 text-right pr-5">
                        tanggal-upload
                    </label>
                    <input
                        type="text"
                        name="tanggal-upload"
                        className="w-9/12 border-2 border-blue-400"
                    />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="topic" className="w-2/12 text-right pr-5">
                        topic
                    </label>
                    <input type="text" name="topic" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="judul" className="w-2/12 text-right pr-5">
                        judul
                    </label>
                    <input type="text" name="judul" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="deskripsi" className="w-2/12 text-right pr-5">
                        deskripsi
                    </label>
                    <input
                        type="text"
                        name="deskripsi"
                        className="w-9/12 border-2 border-blue-400"
                    />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="tools" className="w-2/12 text-right pr-5">
                        tools
                    </label>
                    <input type="text" name="tools" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="github" className="w-2/12 text-right pr-5">
                        github
                    </label>
                    <input type="text" name="github" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="youtube" className="w-2/12 text-right pr-5">
                        youtube
                    </label>
                    <input type="text" name="youtube" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="other-link" className="w-2/12 text-right pr-5">
                        other-link
                    </label>
                    <input
                        type="text"
                        name="other-link"
                        className="w-9/12 border-2 border-blue-400"
                    />
                </div>
                <div className=" w-full flex mb-10">
                    <label htmlFor="tipe" className="w-2/12 text-right pr-5">
                        tipe
                    </label>
                    <input type="text" name="tipe" className="w-9/12 border-2 border-blue-400" />
                </div>
                <div className="flex w-full justify-center my-10 gap-5">
                    <button type="submit" className="bg-green-500 rounded-md shadow-md px-2 ">
                        submit
                    </button>
                    <button type="reset" className="bg-orange-500 rounded-md shadow-md px-2 ">
                        cancel
                    </button>
                    <Link to="/page-admin" className="rounded-md shadow-lg px-2 bg-yellow-500">
                        back
                    </Link>
                </div>
            </form>
        </div>
    )
}
