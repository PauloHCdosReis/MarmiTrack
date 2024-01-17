import Link from 'next/link'

import FormLogin from '@/components/forms/formLogin'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="bg-gray-100 dark:bg-dark-300 shadow-lg w-96 max-w-lg mx-auto p-2">
        <CardHeader className="items-center">
          <CardTitle>Logar</CardTitle>
          <CardDescription>MarmiTrack</CardDescription>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
        <CardFooter className="text-center justify-center">
          <p className="text-center text-sm text-gray-600 dark:text-gray-500">
            Faça seu cadastro:
            <Link
              href="/cadastro"
              className="ml-1 font-semibold leading-6 text-light-200 dark:text-dark-100"
            >
              Cadastro
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
