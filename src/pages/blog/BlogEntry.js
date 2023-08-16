import { Link }  from "react-router-dom";
import "./blog.css";


const BlogEntry = (props) => {
    const { entry } = props;
    return (
        <div className="blog-entry">
            <Link style={{textDecoration: "none"}} to={"/blog/" + entry.id}>
                <img style={{paddingBottom: "10px"}} src={entry.imageUrl} alt={"cover"} width="100%"/>
                <br/>
                <b style={{textDecoration: "none", color: "#303339"}}>{entry.title}</b>
                <p style={{textDecoration: "none", color: "#303339", textAlign: "center"}}>{entry.date}</p>
            </Link>
        </div>
    )
}

export default BlogEntry;