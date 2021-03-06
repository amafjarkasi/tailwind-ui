import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Stats } from "../component/stats";
import { Context } from "../store/appContext";
import { DividerIcon } from "../component/dividericon";
import { FullWidthSideBar } from "./fwsidebar";
import "../../styles/index.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div style={{ minHeight: "640px" }} className="bg-gray-100">
				<div
					className="h-screen flex overflow-hidden bg-gray-100"
					data-todo-x-data="{ sidebarOpen: false }"
					data-todo-at-keydown-window-escape="sidebarOpen = false">
					<div
						data-todo-x-show="sidebarOpen"
						className="md:hidden"
						data-todo-x-description="Off-canvas menu for mobile, show/hide based on off-canvas menu state.">
						<div className="fixed inset-0 flex z-40">
							<div
								data-todo-at-click="sidebarOpen = false"
								data-todo-x-show="sidebarOpen"
								data-todo-x-description="Off-canvas menu overlay, show/hide based on off-canvas menu state."
								data-todo-x-transition-enter="transition-opacity ease-linear duration-300"
								data-todo-x-transition-enter-start="opacity-0"
								data-todo-x-transition-enter-end="opacity-100"
								data-todo-x-transition-leave="transition-opacity ease-linear duration-300"
								data-todo-x-transition-leave-start="opacity-100"
								data-todo-x-transition-leave-end="opacity-0"
								className="fixed inset-0">
								<div className="absolute inset-0 bg-gray-600 opacity-75"></div>
							</div>
							<div
								data-todo-x-show="sidebarOpen"
								data-todo-x-description="Off-canvas menu, show/hide based on off-canvas menu state."
								data-todo-x-transition-enter="transition ease-in-out duration-300 transform"
								data-todo-x-transition-enter-start="-translate-x-full"
								data-todo-x-transition-enter-end="translate-x-0"
								data-todo-x-transition-leave="transition ease-in-out duration-300 transform"
								data-todo-x-transition-leave-start="translate-x-0"
								data-todo-x-transition-leave-end="-translate-x-full"
								className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800">
								<div className="absolute top-0 right-0 -mr-12 pt-2">
									<button
										data-todo-x-show="sidebarOpen"
										data-todo-at-click="sidebarOpen = false"
										className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Close sidebar</span>
										<svg
											className="h-6 w-6 text-white"
											data-todo-x-description="Heroicon name: outline/x"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"></path>
										</svg>
									</button>
								</div>
								<div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
									<div className="flex-shrink-0 flex items-center px-4">
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
											alt="Workflow"
										/>
									</div>
									<nav className="mt-5 px-2 space-y-1">
										{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
										<a
											href="/"
											className="bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											{/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
											<svg
												className="text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/home"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
											</svg>
											Dashboard
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/users"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
											</svg>
											Team
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/folder"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
											</svg>
											Projects
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/calendar"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
											</svg>
											Calendar
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/inbox"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
											</svg>
											Documents
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/chart-bar"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
											</svg>
											Reports
										</a>
									</nav>
								</div>
								<div className="flex-shrink-0 flex bg-gray-700 p-4">
									<a href="/" className="flex-shrink-0 group block">
										<div className="flex items-center">
											<div>
												<img
													className="inline-block h-10 w-10 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
													alt=""
												/>
											</div>
											<div className="ml-3">
												<p className="text-base font-medium text-white">Tom Cook</p>
												<p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
													View profile
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
							<div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
						</div>
					</div>

					{/* Static sidebar for desktop */}
					<div className="hidden md:flex md:flex-shrink-0">
						<div className="flex flex-col w-64">
							{/* Sidebar component, swap this element with another sidebar if you like */}
							<div className="flex flex-col h-0 flex-1 bg-gray-800">
								<div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
									<div className="flex items-center flex-shrink-0 px-4">
										<img
											className="h-8 w-auto"
											src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
											alt="Workflow"
										/>
									</div>
									<nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
										{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
										<a
											href="/"
											className="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											{/* Current: "text-gray-300", Default: "text-gray-400 group-hover:text-gray-300" */}
											<svg
												className="text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/home"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
											</svg>
											Dashboard
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/users"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
											</svg>
											Team
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/folder"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
											</svg>
											Projects
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/calendar"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
											</svg>
											Calendar
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/inbox"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
											</svg>
											Documents
										</a>

										<a
											href="/"
											className="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
											<svg
												className="text-gray-400 group-hover:text-gray-300 mr-3 h-6 w-6"
												data-todo-x-description="Heroicon name: outline/chart-bar"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true">
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
											</svg>
											Reports
										</a>
									</nav>
								</div>
								<div className="flex-shrink-0 flex bg-gray-700 p-4">
									<a href="/" className="flex-shrink-0 w-full group block">
										<div className="flex items-center">
											<div>
												<img
													className="inline-block h-9 w-9 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
													alt=""
												/>
											</div>
											<div className="ml-3">
												<p className="text-sm font-medium text-white">Tom Cook</p>
												<p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
													View profile
												</p>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col w-0 flex-1 overflow-hidden">
						<div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
							<button
								data-todo-at-click-stop="sidebarOpen = true"
								className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<span className="sr-only">Open sidebar</span>
								<svg
									className="h-6 w-6"
									data-todo-x-description="Heroicon name: outline/menu"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</button>
						</div>
						<main
							className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
							tabIndex={0}
							data-todo-x-data=""
							data-todo-x-init="$el.focus()">
							<div className="py-6">
								<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
									<h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
								</div>
								<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
									{/* Replace with your content */}
									<div className="py-4">
										<div className="border-4 border-none border-gray-200 rounded-lg h-128">
											<Stats />
											<DividerIcon />
										</div>
									</div>
									{/* /End replace */}
								</div>
							</div>
						</main>
					</div>
				</div>
			</div>
		</>
	);
};
