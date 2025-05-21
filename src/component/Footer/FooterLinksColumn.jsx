import React from 'react'


export default function FooterLinksColumn({ title, links }) {
    return (
        <div>
            <div className="p-6">
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                    {links.map((link, id) => (
                        <li key={id} className=" text-gray-700 hover:text-green-400 hover:translate-x-2 transition-all duration-300">
                            <a href="#">{link}</a>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}
