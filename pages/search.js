import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults"
import Response from "../public/assets/response";

function Search({ results }) {
	console.log(results)
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.term} - Boogle Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<Header />
			{/* Search Results */}
			<SearchResults results={results}/>
		</div>
	);
}

export default Search;

export async function getServerSideProps(context) {
	const useDummyData = false;
	const startIndex = context.query.start || "0";

	const data = useDummyData
		? Response
		: await fetch(
				`https://www.googleapis.com/customsearch/v1?key=${process.env.googleSearchApiKey}&cx=${process.env.googleSearchContextKey}&q=${context.query.term}&start=${startIndex}`
		  ).then((response) => response.json());

	//After server returns the results pass the results to client
	return {
		props: {
			results: data,
		},
	};
}
