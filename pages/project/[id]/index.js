import { useRouter } from "next/router";
import ProjectList from "../../../components/ProjectList";

const project = () => {
	const router = useRouter();
	const { id } = router.query;
	console.log();

	return (
		<div>
			<ProjectList />
			<h1>{id}</h1>
		</div>
	);
};

export default project;
