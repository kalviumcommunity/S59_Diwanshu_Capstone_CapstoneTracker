import {useForm} from "react-hook-form" ;
import {Link} from "react-router-dom" ;

function AssignmentForm(){
    const {
        register,
        handleSubmit,
        formState : {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data) ;
    };

    return (
    <div className="w-3/6 bg-purple-400">
        <div>
          <p> How is the Progress?</p>
        </div>   
    </div>
    );
}
export default AssignmentForm ;