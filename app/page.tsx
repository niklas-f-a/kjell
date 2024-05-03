'use client';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<main className='flex flex-col p-24 bg-red-500'>
			<Button onClick={() => console.log('hek')}>hej</Button>
		</main>
	);
}
