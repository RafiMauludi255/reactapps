import { render } from "@testing-library/react";
import React from "react";
import './apk.css'
import icon from './image/icon.svg'


function Button() {
    return <button>Belanja Sekarang!</button>
}

class Apk extends React.Component {
    render() {
        return (
            <div className="body">
                <nav>
                    <div className="logo">Lannika</div>
                    <ul>
                        <li>Home</li>
                        <li>Produk</li>
                        <li>Tentang</li>
                        <li>Kontak</li>
                    </ul>
                </nav>

                {/* Heading */}
                <div className="Hero">
                    <img src={icon} alt="" />
                    <h1>Gaya baru dengan<br />sendal dari Lannika</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consectetur tenetur laborum eius tempore architecto ratione culpa necessitatibus.</p>
                    <Button />
                </div>
            </div>
        )
    }
}

export default Apk