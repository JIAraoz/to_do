/* eslint-disable react/prop-types */



export default function Login(props){
   
   

    
    
    
    
    return(
        <>
        <form onSubmit={props.handleSubmit} >
            <label>
                Email:
                <input type="email"  name="email" onChange={props.handleChange}/>
            </label>
           
            <label>
                Password:
                <input type="password"  name="password" onChange={props.handleChange}/>
            </label>
         

            <input type="submit" value="Iniciar sesion"/>
        </form>
       <h1>{props.access.accessMessage}</h1>
        
        
        </>
    
    )
    }    
