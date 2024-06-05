const apiUrl =
    import.meta.env.VITE_api_medsos

const getDataSocialMedia = (setDataApi) => {
    fetch(apiUrl)
        .then((data) => data.json())
        .then(
            (succes) => setDataApi(succes),
            (error) => setDataApi(error),
        )
}

export { getDataSocialMedia }