import React, {useEffect} from 'react'

export default function Theme() {
    useEffect(()=>{
        setActiveTheme()
    },[])
    const changeTheme = (e) => {
        document.documentElement.setAttribute('data-theme', e.target.dataset.theme)
        setActiveTheme()
    }
    const setActiveTheme = () => {
        let theme = document.documentElement.dataset.theme
        let index = themeMap.map((obj) => obj.string).indexOf(theme)
        document.querySelectorAll('.active_theme').forEach((el)=> el.classList.remove('active_theme'))
        document.getElementById(`theme_select_${themeMap[index].string}`).classList.add('active_theme')
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
        <div id="theme_select" className="pb-8" style={{
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
                            <button id={`theme_select_${themeobj.string}`} className="btn btn-primary opacity-20 hover:opacity-100 btn-circle btn-xs mx-2 shadow-md theme_button" data-theme={themeobj.string} onClick={(e) => changeTheme(e)}></button>
                        </div>

                    )
                })
            }
            

        </div>
    )
}
