function Service(props){
return(
<div className = "card">
    <div className = "card-img">{props.image}</div>
    <h2 className="card-title">{props.title}</h2>
    <p className ="card-desc">{props.desc}</p>
    <p className="parent-btn"><button className="card-btn">Read more</button></p>
</div>
)

}
export default Service;