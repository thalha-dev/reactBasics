import { useParams, useLoaderData } from "react-router-dom";

const CareersDetail = () => {
  const { id } = useParams();
  const career = useLoaderData();
  console.log(career);

  return (
    <div className="career-details">
      <h2>Career detail for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia. Culpa
          proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </p>
      </div>
    </div>
  );
};

export default CareersDetail;

export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4100/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};
