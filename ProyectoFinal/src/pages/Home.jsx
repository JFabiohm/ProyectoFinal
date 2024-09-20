import FormHome from "../components/FormHome";
import  FormNav  from "../components/FormNav";
import FormFooter from "../components/FormFooter"

function Home() {
    return(
        <div>
            <FormNav />
            <FormHome />
            <FormFooter/>
        </div>
    )
    
}
export default  Home;