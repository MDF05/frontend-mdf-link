import { useEffect, useState } from "react"

import { SocialIcon } from "react-social-icons"
import { getDataSocialMedia } from "../service-API/social-media-API.js"

// let countUser = 0
// setInterval(() => {
//     const usernameAccount = document.querySelectorAll(".username-media-social")
//     const account = usernameAccount[countUser]
//     if (countUser !== 0) {
//         const last = usernameAccount[countUser - 1]
//         last?.classList.add("hidden")
//     }
//     if (countUser === usernameAccount.length) {
//         usernameAccount[countUser - 1]?.classList.add("hidden")
//         countUser = 0
//     }
//     account?.classList.remove("hidden")
//     countUser++
// }, 1000)

function HeaderSocialMedia() {
    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        getDataSocialMedia(setDataApi)
    }, [])

    return (
        <div className="flex justify-center w-full flex-wrap gap-5 mt-5 px-5">
            {dataApi?.socialMedia?.map((e, i) => {
                const platform = e.platform.includes("/")
                    ? e.platform.split("/")[1]
                    : e.platform.split(" ").length > 0
                    ? e.platform.split(" ")[0]
                    : e.platform

                let textColor
                if (platform == "youtube") textColor = "border-red-400"
                else if (platform == "instagram") textColor = "border-pink-400"
                else if (platform == "tiktok" || platform == "threads" || platform == "github")
                    textColor = "border-black"
                else if (platform == "twitter" || platform == "telegram")
                    textColor = "border-blue-400"
                else if (platform == "discord") textColor = "border-blue-800"
                else textColor = "border-blue-900"
                return (
                    <div
                        className={`font-mono font-extrabold text-2xl flex items-center justify-center button-social-media gap-0 bg-white rounded-full p-1 border-4 ${textColor} scale-75 lg:gap-1 lg:scale-90`}
                        key={i}>
                        <SocialIcon
                            network={platform}
                            href={e["profile-link"]}
                            aria-label={`profile ${platform}`}
                            id="social-icon"
                            className="scale-10"
                        />
                        <a
                            href={e["profile-link"]}
                            className={`hidden username-media-social text-${textColor}`}>
                            {e.username}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export { HeaderSocialMedia }
