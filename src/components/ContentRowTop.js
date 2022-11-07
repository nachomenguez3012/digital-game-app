import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowCards from "./ContentRowCards";
import Cards from "./Cards";

function ContentRowTop() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
				</div>

				<ContentRowCards />
				<ContentRowCenter />
				<Cards />

			</div>

		</React.Fragment>
	)

}
export default ContentRowTop;