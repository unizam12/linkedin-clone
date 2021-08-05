import React from "react";
import styled from "styled-components";
import "./header.css";

function Header(props) {
	return (
		<div>
			<div className="container">
				<div className="content">
					<span className="logo">
						<a href="/home">
							<img src="/images/home-logo.svg" />
						</a>
					</span>
					{/* <div className="search"> */}
					<Search>
						<div>
							<input type="text" placeholder="Search"></input>
						</div>
						<div className="search-icon">
							<img src="/images/search-icon.svg" />
						</div>
					</Search>
					{/* </div> */}

					{/* <div className="nav">
					
						<div className="nav-list-wrap">
							<div className="nav-list">
								<a>
									<img src="/images/nav-home.svg" />
								</a>
							</div>
						</div>
				
					</div> */}
					<Nav>
						<NavListWrap>
							<NavList className="active">
								<a>
									<img src="/images/nav-home.svg" />
									<span>Home</span>
								</a>
							</NavList>
							<NavList>
								<a>
									<img src="/images/nav-network.svg" alt="" />
									<span>My Network</span>
								</a>
							</NavList>

							<NavList>
								<a>
									<img src="/images/nav-jobs.svg" alt="" />
									<span>Jobs</span>
								</a>
							</NavList>

							<NavList>
								<a>
									<img src="/images/nav-messaging.svg" alt="" />
									<span>Messaging</span>
								</a>
							</NavList>

							<NavList>
								<a>
									<img src="/images/nav-notifications.svg" alt="" />
									<span>Notifications</span>
								</a>
							</NavList>
							<User>
								<a>
									<img src="/images/user.svg" alt="" />
									<span>Me</span>
									<img src="/images/down-icon.svg" alt="" />
								</a>

								<SignOut>
									<a>Sign Out</a>
								</SignOut>
							</User>

							<Work>
								<a>
									<img src="/images/nav-work.svg" alt="" />
									<span>
										Work
										<img src="/images/down-icon.svg" alt="" />
									</span>
								</a>
							</Work>
						</NavListWrap>
					</Nav>
				</div>
			</div>
		</div>
	);
}
const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;

	& > div {
		max-width: 280px;
		input {
			border: none;
			box-shadow: none;
			background-color: #eef3f8;
			border-radius: 2px;
			color: rgba(0, 0, 0, 0.9);
			width: 218px;
			padding: 0 8px 0 40px;
			line-height: 1.75;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			border-color: #dce6f1;
			vertical-align: text-top;
		}
	}
`;
const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 768px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
	}
`;

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;
	.active {
		span:after {
			content: "";
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			bottom: 0;
			left: 0;
			position: absolute;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`;

const NavList = styled.li`
	display: flex;
	align-items: center;
	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		font-weight: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 52px;
		min-width: 80px;
		position: relative;
		text-decoration: none;
		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
		}
		@media (max-width: 768px) {
			min-width: 70px;
		}
	}
	&:hover,
	&:active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}
`;
const SignOut = styled.div`
	position: absolute;
	top: 45px;
	background: white;
	border-radius: 0 0 5px 5px;
	width: 100px;
	height: 40px;
	font-size: 16px;
	transition-duration: 167ms;
	text-align: center;
	display: none;
`;

const User = styled(NavList)`
	a > svg {
		width: 24px;
		border-radius: 50%;
	}
	a > img {
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}
	span {
		display: flex;
		align-items: center;
	}
	&:hover {
		${SignOut} {
			align-items: center;
			display: flex;
			justify-content: center;
		}
	}
`;

const Work = styled(User)`
	border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
