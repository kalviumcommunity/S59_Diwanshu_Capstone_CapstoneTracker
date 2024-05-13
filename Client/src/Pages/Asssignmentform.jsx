import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function AssignmentForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-3/6 bg-purple-500 h-screen">
        <div className="mx-8">
          <div className="text-white text-3xl">
            <p> How is the Progress?</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <strong className="text-white text-2xl">Github PR link</strong>
                <br />
                <input
                  type="text"
                  className="h-8 w-4/5 rounded-xl border-white border-2 border-solid px-4"
                  placeholder="https://github.com/"
                  {...register("github", {
                    required: "Please Provide Valid  Link",
                  })}
                />
                {errors.github && (
                  <p className="text-red-600">PR is Mandatory</p>
                )}
              </div>
              <div>
                <strong className="text-white text-2xl">Artifact link</strong>
                <br />
                <input
                  type="text"
                  className="h-8 w-4/5 rounded-xl border-white border-2 border-solid px-4"
                  placeholder="https://figma.com/"
                  {...register("artifact", {
                    required: "Please Provide Valid  Link",
                  })}
                />
                {errors.artifact && (
                  <p className="text-red-600">Artifact is Mandatory</p>
                )}
              </div>
              <div>
                <strong className="text-white text-2xl">
                  Codium AI Review
                </strong>
                <br />
                <input
                  type="text"
                  className="h-24 w-4/5 rounded-xl border-white border-2 border-solid px-4  resize-none overflow-x-scroll"
                  placeholder="As a LLm model, I would like to say ...."
                  {...register("codium", {
                    required: "Please Provide Valid  Link",
                  })}
                />
                {errors.codium && (
                  <p className="text-red-600">Codium AI is Mandatory</p>
                )}
              </div>
              <div>
                <strong className="text-white text-2xl">
                  Action taken on Review
                </strong>
                <br />
                <input
                  type="text"
                  className="h-24 w-4/5 rounded-xl border-white border-2 border-solid px-4 overflow-x-scroll overflow-y-scroll"
                  placeholder="As a LLm model, I would like to say ...."
                  {...register("action", {
                    required: "Please Provide Valid  Link",
                  })}
                />
                {errors.action && (
                  <p className="text-red-600">
                    Action taken is Mandatory if not then do NA.
                  </p>
                )}
              </div>

              <div className=" m-12 h-8 w-36 bg-white rounded-xl border-indigo-700 border-2 border-solid text-purple-500 text-center">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AssignmentForm;
