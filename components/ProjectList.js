import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const ProjectList = ({ projects }) => {
	const [projs, setProjs] = useState([]);

	useEffect(async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
		const projects = await response.json();
		setProjs(projects)
	}, []);


console.log(projs)
	return (
		<div className={styles.list}>
			<h2>список проектов</h2>

			<div>
				<Link href="/">Home</Link>
				{projs.map((project) => {
					return (
						<Link href="/project/[id]" as={`/project/${project.id}`} key={project.id}>
							<h3>{project.title}</h3>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default ProjectList;
