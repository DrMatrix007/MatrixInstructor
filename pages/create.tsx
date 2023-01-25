import Navbar from "../components/navbar";
import { useUser } from "../hooks/use_user";
import { signInWithGoogle } from "../services/auth";

const create = () => {
    const user = useUser();
    
    return (
        <>
            <Navbar />
            <div className="center">
            {!user ? (
                    <button onClick={_=>signInWithGoogle()}>login</button>
                    ) :
                    (
                    <>
                    
                    
                    </>                        
                )
            }
            </div>
        </>
    );
}

export default create;