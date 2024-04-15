import { Fragment } from "react"
import Cover from "../images/cover.jpeg"

const Card = ({
    title = "Title", desc = "desc", href = "#"
}) => {
    return (
        <Fragment>
            <div className="card" style={{ width: "18rem" }}>
                <img src={Cover} className="card-img-top" alt="error " />
                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {desc}
                    </p>
                    <a href={href} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Card;