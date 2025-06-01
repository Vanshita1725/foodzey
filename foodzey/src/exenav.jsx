import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import './app.css'
import { Link, Outlet } from "react-router";

function exebar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <div className="nav">
                <button onClick={toggleOffcanvas} className=" text-black py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faGripLines} />
                </button>
                <div>
                    <ul style={{ display: 'flex', gap: '50px' }}>
                        <li>
                            <Link className="link" to="/">home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Category">Catrgpry</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Products">Products</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Pages">Pages</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Blog">Blog</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Element">Element</Link>
                        </li>
                    </ul>

                </div>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+123 ( 456 ) ( 7890 )</p>
                </div>
            </div>

            <div
                className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <button onClick={toggleOffcanvas} className="text-gray-500 hover:text-gray-700">
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <h2>Offcanvas Content</h2>
                </div>

            </div>
            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={toggleOffcanvas}
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"

                ></div>
            )}
            <Outlet />
        </div>
    )
}
export default exebar;