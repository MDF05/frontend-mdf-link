/* eslint-disable react/prop-types */

function SvgLogo({ linkUrl, logoType, bgcolor, colorLogo }) {
    if (linkUrl === "none") return
    return (
        <a
            className="left-5 top-1 bg-white rounded-full p-0.5 svg-logo-link scale-95"
            href={linkUrl}>
            <svg
                role="img"
                aria-label="profile telegram social icon"
                className={`social-svg ${bgcolor}`}
                viewBox="0 0 64 64"
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    fillRule: "evenodd",
                }}>
                <g
                    className="social-svg-icon"
                    style={{ transition: "fill 170ms ease-in-out 0s", fill: "white" }}>
                    <path d={logoType.path}></path>
                </g>
                <g
                    className="social-svg-mask"
                    style={{
                        transition: "fill 170ms ease-in-out 0s",
                        fill: colorLogo,
                    }}>
                    <path d={logoType.path}></path>
                </g>
            </svg>
        </a>
    )
}

export { SvgLogo }
