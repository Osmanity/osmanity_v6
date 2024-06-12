import { allProjects } from "contentlayer/generated";
import ProjectContent from "./ProjectContet";

export async function generateStaticParams() {
  const projects = await allProjects;

  return projects.map((project) => ({ slug: project.slug }));
}

export const generateMetadata = async ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug,
  );

  return { title: project?.title, excerpt: project?.excerpt };
};

const ProjectLayout = ({ params }) => {
  const project = allProjects.find(
    (project) => project._raw.flattenedPath === "projects/" + params.slug,
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <ProjectContent project={project} params={params} />
    </>
  );
};

export default ProjectLayout;
