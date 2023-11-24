function Intro(props) {
    return (
        <div className="blog-post-intro">
            <h2>{props.h2}</h2>
            <div>
                <p>{props.text}</p>
                <p className="link">Read more...</p>
            </div>
        </div>
    );
};

export default Intro;