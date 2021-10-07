import React from 'react'

export default function Theme() {
    const changeTheme = (e) => {
        document.documentElement.setAttribute('data-theme', e.target.dataset.theme)
    }
    const themeMap = [
        {
            title: "Dark",
            string: "dark",
        },
        {
            title: "Light",
            string: "light",
        },
        {
            title: "Halloween",
            string: "halloween",
        },
        {
            title: "Synthwave",
            string: "synthwave",
        },
        {
            title: "Dracula",
            string: "dracula",
        },
    ]
    return (
        <div id="theme_select" className="pb-3" style={{
            position: 'fixed',
            zIndex: 999,
            bottom: 0,
            left: "50%",
            transform: 'translateX(-50%)'
        }}>
            {
                themeMap.map((themeobj, indx) => {
                    return(
                        <div className="tooltip" data-tip={themeobj.title} data-theme={themeobj.string}>
                            <button className="btn btn-primary btn-circle btn-xs mx-2 shadow-md" data-theme={themeobj.string} onClick={(e) => changeTheme(e)}></button>
                        </div>

                    )
                })
            }
            

        </div>
    )
}