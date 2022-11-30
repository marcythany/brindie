import { Menu } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const links = [
	{ href: "/", label: "inicio" },
	{ href: "/novidades", label: "Novidades" },
	{ href: "/destaques", label: "Destaques" },
	{ href: "/contato", label: "Contato" },
];

export const MyMenu = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<Menu>
			<Menu.Button>
				{toggleMenu ? (
					<RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
				) : (
					<RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
				)}
			</Menu.Button>
			<Menu.Items>
				{links.map(link => (
					/* Use the `active` state to conditionally style the active item. */
					<Menu.Item key={link.href} as={Fragment}>
						<a href={link.href}>{link.label}</a>
					</Menu.Item>
				))}
			</Menu.Items>
		</Menu>
	);
};

export const MenuItems = () => {
	return (
		<ul>
			{links.map(link => (
				/* Use the `active` state to conditionally style the active item. */
				<li key={link.href}>
					<a href={link.href}>{link.label}</a>
				</li>
			))}
		</ul>
	);
};
