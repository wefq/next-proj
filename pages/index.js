import ProjectList from "../components/ProjectList";
import styles from "../styles/Home.module.css";

export default function Home({projects}) {

	return <div className={styles.container}>
		<ProjectList />
	</div>;
}

// export const getStaticProps = async () => {
// 	const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
// 	const projects = await response.json();
// 	return {
// 		props: { projects },
// 	};
// };