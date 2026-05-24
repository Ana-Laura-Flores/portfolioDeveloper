import { FaGithubAlt, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="flex flex-col justify-center p-5 pt-10 h-auto items-center bg-black text-white"
        >
            <ul
                style={{
                    display: "flex",
                    margin: "3px",
                    listStyle: "none",
                    marginTop: "20px",
                    fontSize: "1.5rem",
                }}
            >
                <li style={{ padding: "5px" }}>
                    <a
                        href="https://github.com/Ana-Laura-Flores"
                        target="blank"
                        style={{ textDecoration: "none", color: "whiteSmoke" }}
                    >
                        <FaGithubAlt />
                    </a>
                </li>
                <li style={{ padding: "5px" }}>
                    <a
                        href="https://www.linkedin.com/in/kreardisenio/"
                        target="blank"
                        style={{ textDecoration: "none", color: "whiteSmoke" }}
                    >
                        <FaLinkedinIn />{" "}
                    </a>
                </li>
                <li style={{ padding: "5px" }}>
                    <a
                        href="mailto:anadisenio@hotmail.com"
                        target="_blank"
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <FaEnvelope />
                    </a>
                </li>
            </ul>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "3px",
                }}
            >
                <p style={{ margin: "0  5px" }}>Hecho con </p>
                <p>❤️</p>
                <p style={{ margin: "0  5px" }}> por Ana Laura Flores</p>
            </div>
        </div>
    );
}
