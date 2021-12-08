import Meta from "./Meta";
import ProjectList from "./ProjectList";

const Layout = ({ children}) => {
	
	return (
		<>
			<Meta />
			<main>
			
			{children}
			</main>
		</>
	);
};



export default Layout;
