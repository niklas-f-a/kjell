import { FileText, Home, Info } from 'lucide-react';
import React from 'react';

const menuItems = [
	{
		label: 'Start',
		iconComponent: Home,
	},
	{
		label: 'Om oss',
		iconComponent: Info,
	},
	{
		label: 'Gratis offert',
		iconComponent: FileText,
	},
];

export default function Hamburger() {
	return (
		<div className='flex gap-5 md:hidden'>
			{menuItems.map((item) => (
				<div key={item.label} className='flex flex-col items-center'>
					<item.iconComponent />
					<span>{item.label}</span>
				</div>
			))}
		</div>
	);
}
