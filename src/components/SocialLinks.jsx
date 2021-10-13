import React from 'react'

export default function SocialLinks(props) {
    return (
        <div>
            <ul>
                {
                    props.links.map((linkObj, indx) => {
                        return(
                            <li>
                                <a href={linkObj.href}>{linkObj.title}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
