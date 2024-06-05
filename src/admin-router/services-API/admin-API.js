const apiUrl = import.meta.env.VITE_api_content

function getAllData(setElement) {
    fetch(apiUrl)
        .then((e) => e.json())
        .then(
            (succes) => {
                setElement(succes)
            },
            (err) => {
                console.log(err)
            },
        )
}

export { getAllData }
