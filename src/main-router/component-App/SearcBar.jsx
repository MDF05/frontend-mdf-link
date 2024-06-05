/* eslint-disable react/prop-types */

import "../css/search-bar.css"
import { ImSearch } from "react-icons/im"
function SearchLink({ updateInputSearch }) {
    return (
        <div className="w-full flex justify-center gap-1">
            <label
                htmlFor="search-link"
                className="searchButton flex items-center justify-center w-1/12">
                <ImSearch></ImSearch>
            </label>
            <input
                type="search"
                id="search-link"
                className="w-11/12 p-1 searchTerm"
                placeholder="cari link berdasarkan tanggal-upload,topic,judul,dan tools yang digunakan"
                onInput={(input) => updateInputSearch(input.target.value.toLowerCase())}
            />
        </div>
    )
}

export { SearchLink }
