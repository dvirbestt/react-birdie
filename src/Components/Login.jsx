
import test from "../assets/test.png"
import {FcGoogle} from "react-icons/fc";
import axios from "axios";
import {connect} from "react-redux";
import {useNavigate} from "react-router";


function Login(props) {

   let navigate = useNavigate()

    const login = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target)

        axios.post("http://localhost:3000/Users/login",{
            user : {
                userName : formData.get("userName"),
                password : formData.get("password")
            }
        }).then((res)=> {
            const data = res.data;
            localStorage.setItem("token",data.token);
            localStorage.setItem("user",JSON.stringify(data.user));


            // eslint-disable-next-line react/prop-types
            props.dispatch({
                type: "ADD",
                payload: {
                    user: data.user,
                    token : data.token
                }
            })

            navigate("/test")

        }).catch((e)=> {
            console.log(e.response.data.message)
        })

    }

    return (
        <div className={"flex"} onSubmit={(e)=>login(e)}>
            <form className={"mt-10 m-auto w-full items-center flex flex-col gap-5"}>
                <h2 className={"mt-10 text-3xl font-bold"}>Login</h2>
                <div>
                    <label className={""}>Username</label>
                    <input name={"userName"} className={" rounded h-10 p-3 border-2 w-72 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"} type={"text"}/>

                </div>
                <div>
                    <label className={""}>Password</label>
                    <input name={"password"} className={" rounded h-10 p-3 border-2 w-72 1border-gray-400 block focus:outline-none focus:ring focus:ring-blue-300"} type={"password"}/>

                </div>


                <button className={"mt-5 h-10 hover:bg-black hover:text-white  transition duration-300 border-l-2 border-r-2 border-black w-56"} type={"submit"}>Login</button>
                <div className={"text-blue-600 mt-5 hover:cursor-pointer"}>Not Signed Up Yet? Click Here!</div>
                <div className={"flex h-8 items-center justify-center p-5 gap-4 border-2 rounded hover:cursor-pointer" }>Login With Google <FcGoogle size={30}/></div>
            </form>
            <img src={test} className={"w-8/12 "}/>

        </div>
    );
}

function mapStateToProps(state){
    return {
        user : state.user,
        token : state.token
    }
}

export default connect(mapStateToProps)(Login);