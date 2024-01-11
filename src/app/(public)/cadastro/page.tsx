import Link from 'next/link';

import FormCadastro from '@/components/forms/formCadastro';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default function Cadastro() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Card className="bg-gray-300 dark:bg-dark-300 shadow-lg p-2">
				<CardHeader className="items-center">
					<CardTitle>Cadastro</CardTitle>
					<CardDescription>MarmiTrack</CardDescription>
				</CardHeader>
				<CardContent>
					<FormCadastro />
				</CardContent>
				<CardFooter className="text-center justify-center">
					<p className="text-center text-sm text-gray-600 dark:text-gray-500">
						Voltar para o login:
						<Link
							href="/login"
							className="ml-1 font-semibold leading-6 text-light-200 dark:text-dark-100"
						>
							Logar
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
