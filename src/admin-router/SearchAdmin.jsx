function inputSearchAdmin(elemen) {
    const inputText = elemen.target.value.toLowerCase()
    const getSearchTable = document.querySelectorAll(".search-table")
    getSearchTable.forEach((e) => {
        if (inputText.length !== 0) {
            if (e.innerHTML.toLocaleLowerCase().match(inputText) !== null) {
                e.classList.add("bg-blue-200")
                e.classList.remove("order-2")
                e.classList.add("order-1")
            } else {
                e.classList.remove("bg-blue-200")
                e.classList.remove("order-1")
                e.classList.add("order-2")
            }
        } else {
            e.classList.remove("bg-blue-200")
            e.classList.add("order-2")
            e.classList.remove("order-1")
        }
    })
}

function SearchAdmin() {
    return (
        <div className="flex  mb-5">
            <label htmlFor="search-admin" className="p-2 text-end text-2xl">
                cari
            </label>
            <input
                type="search"
                id="search-admin"
                className="w-11/12 border border-blue-500 py-2 ps-2"
                onInput={(e) => inputSearchAdmin(e)}
            />
        </div>
    )
}

export default SearchAdmin
