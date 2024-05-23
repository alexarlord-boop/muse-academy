export default function ProductCard({imgSrc, title, text, link}) {
    return (
        <div className="card product-card">
            {/*<img src={imgSrc} className="card-img-top" alt={title} />*/}
            <div style={{backgroundColor: imgSrc, height: "159px"}}></div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a tabIndex={3} href={link} className="btn text-primary px-0">Read more <i className="bi bi-chevron-right"></i></a>
            </div>
        </div>
    );
}
