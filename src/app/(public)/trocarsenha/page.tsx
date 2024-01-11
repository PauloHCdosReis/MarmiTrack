import Link from 'next/link';

import FormTrocarSenha from '@/components/forms/formTrocarSenha';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card';

export default function TrocarSenha() {
	return (
		<div className="flex items-center justify-center min-h-screen">
			<Card className="bg-gray-300 dark:bg-dark-300 shadow-lg max-w-lg mx-auto p-2">
				<CardHeader className="items-center">
					<CardTitle>Trocar Senha</CardTitle>
					<CardDescription>MarmiTrack</CardDescription>
				</CardHeader>
				<CardContent>
					<FormTrocarSenha />
				</CardContent>
				<CardFooter className="text-center justify-center">
					<p className="text-center text-sm text-gray-600 dark:text-gray-500">
						Voltar para o login:
						<Link
							href="/login"
							className="ml-1 font-semibold leading-6 text-light-200 dark:text-dark-100"
						>
							Voltar
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
