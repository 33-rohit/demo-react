import Navlink from './Navlink';
import Service from './Service';

function Header(props){
    let name = "Rohit tailor";
    const navdata = ["Home","product","About","Contact"];
    const services =[
        {
            title:"language",
            desc:"C programing is the first programing language",
            image:"https://www.ptiacademy.in/assets/front/images/web-development.png"
        },
        {
            title:"Database",
            desc:" Sql and Mysql is use to perform operation on Database",
            image:"https://download.pingcap.com/images/blog/choosing-right-database-for-your-applications.png"
        }
    ]
    return(
        <div>
        <h1>Header Component</h1>
        <h2>Myself {name} </h2>
        <h2> My age : {props.age}</h2>
        <h3>this is 1st Component</h3>
       <Navlink name = "Navlink" />
       {
           navdata.map((data,index)=>(
            <Navlink name = {data} />
            
           ))
       }
        {/* <Service title ="Web-development" desc = "description of Web-development data" />
        <Service title ="App-development" desc = "description of App-development data" />    */}
       <div><h1 className = "container-title">All Services</h1>
           <div className ="container"> {
            services.map((service,index)=>(
                <Service key={index} title ={service.title} desc = {service.desc} image = {service.image}/>
            ))
        } 
        </div>
        </div>
       
        </div>
    )
}

export default Header;