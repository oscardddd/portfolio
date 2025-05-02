import ProjectItem from './ProjectItem'
import data from './data/projects.json'
import Link from 'next/link';

const ProjectList = (): JSX.Element => {
    return (
        <section className="grid" id="publications">
            <h2 className="text-xl font-bold mt-12 mb-4">Projects</h2>
            <div>
                {data.map((project, index) => (
                    <Link href = {project.link} key={index}>
                        <ProjectItem project={project} index={index}/>
                    </Link>
                ))}
            </div>
        </section>
        
    );
};



export default ProjectList;
