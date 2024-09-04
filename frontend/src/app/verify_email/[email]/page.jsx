import VerifyPage from "@/components/Authentication/VerifyPage";
import axios from "axios";

const page = async({params}) => {
  const email = decodeURIComponent(params.email);
  
  axios.patch(`https://devstream-server.vercel.app/user-verify-devstream/${email}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  
    
  return (
    <div>
      <VerifyPage></VerifyPage>
    </div>
  )
};

export default page;
