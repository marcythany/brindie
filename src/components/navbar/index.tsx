import { MenuItems, MyMenu } from "../dropdown";

const Navbar = () => {
	return (
		<nav>
			<div className="nav__wrapper">
				<div className="nav__left">
					<div className="nav__left-logo">
						<p>BR</p>
						<span>Indie</span>
					</div>
				</div>

				<div className="nav__right">
					<div className="nav__items">
						<MenuItems />
					</div>
					<div className="nav__items-mobile">
						<MyMenu />
					</div>
					<div className="nav__avatar">
						<img src="./assets/avatar.png" alt="Avatar do usuário" srcSet="/login" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
