/* eslint-disable react/prop-types */
import { MdContentCopy } from "react-icons/md"
import { alertItem } from "../service_javascript/alertItem"

function CopyContent({ linkURL, nameitem }) {
    function copyItem() {
        navigator.clipboard.writeText(linkURL).then(
            () => {
                alertItem(`berhasil menyalin item <span class="text-red-600">${nameitem}</span>`)
            },
            () => alert("gagal menyalin teks ke clipboars"),
        )
    }

    return (
        <div onClick={copyItem} className="scale-150 flex justify-end mr-5 copy-item w-max">
            <MdContentCopy className="copy-item"></MdContentCopy>
        </div>
    )
}

export { CopyContent }
