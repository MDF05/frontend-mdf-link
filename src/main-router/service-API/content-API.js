const apiUrl =
    import.meta.env.VITE_api_content
const dataContent = (setDataApi) => {
    fetch(apiUrl)
        .then((data) => data.json())
        .then(
            (data) => setDataApi(data),
            (err) => setDataApi(err),
        )
}

export { dataContent }