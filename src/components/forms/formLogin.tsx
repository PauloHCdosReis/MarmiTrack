'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

const loginFormSchema = z.object({
  username: z
    .string()
    .nonempty('O username é obrigatório!')
    .transform((username) => {
      return username.trim()
    }),
  senha: z.string().nonempty('A senha é obrigatória!'),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export default function FormLogin() {
  const [toggleSenha, setToggleSenha] = useState(false)
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function loginUser(data: any) {
    /* data.preventDefault() */
    /* const username = data.username
    const senha = data.senha
    console.log(data)
    const result = await signIn('credentials', {
      username,
      senha,
      redirect: false,
    })

    if (result?.error) {
      console.log(result)
      return
    }
    console.log('/home') */
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full max-w-xs"
        onSubmit={handleSubmit(loginUser)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
            type="text"
            id="username"
            {...register('username')}
            autoComplete="off"
          />
          {errors.username && (
            <span className="text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label htmlFor="senha" className="block font-medium leading-6">
              Senha
            </label>
            <div className="text-sm">
              <a
                className="font-semibold text-light-200 dark:text-dark-100 cursor-pointer"
                onClick={() => setToggleSenha((toggleSenha) => !toggleSenha)}
              >
                {toggleSenha ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye-off"
                  >
                    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                    <line x1="2" x2="22" y1="2" y2="22" />
                  </svg>
                )}
              </a>
            </div>
          </div>
          <input
            className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
            type={toggleSenha ? 'text' : 'password'}
            id="senha"
            {...register('senha')}
          />
          {errors.senha && (
            <span className="text-sm text-red-500">{errors.senha.message}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="lembrarSenha" className="block font-medium leading-6">
            <input
              type="checkbox"
              id="lembrarSenha"
              name="lembrarSenha"
              className="default:ring-2 checked:bg-blue-500 ... me-1 cursor-pointer"
            />
            <span className="cursor-pointer">Lembra sessão</span>
          </label>
          <div className="text-sm">
            <Link
              href="/esquecisenha"
              className="font-semibold text-light-200 dark:text-dark-100"
            >
              Esqueci Senha
            </Link>
          </div>
        </div>
        <button
          className="bg-light-200 dark:bg-dark-100 rounded p-1 text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  )
}
