import React from "react";
import ReactDOM from "react-dom";

export const DividerIcon = props => (
	<>
		<div className="py-8">
			<div className="max-w-2xl mx-auto px-4">
				<div className="relative">
					<div className="absolute inset-0 flex items-center" aria-hidden="true">
						<div className="w-full border-t border-gray-300"></div>
					</div>
					<div className="relative flex justify-center">
						<span className="px-2 text-gray-500">
							<svg
								className="h-5 w-5 text-gray-500"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 40"></svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	</>
);
