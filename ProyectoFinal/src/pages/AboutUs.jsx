import FormAboutUs from "../components/FormAboutUs";
import FormNav from "../components/FormNav"
import FormMap from "../components/FormMap"
import FormContac from "../components/FormContac"
import FormFooter from "../components/FormFooter"


function AboutUs() {
    return(
        
        <div>
          <FormNav />
          <FormAboutUs />
          <FormMap/>
          <FormContac/>
          <FormFooter/>
        </div>

    )
    
}
 export default AboutUs;