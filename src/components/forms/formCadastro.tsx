'use client'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const cadastroFormSchema = z
  .object({
    username: z
      .string()
      .nonempty('O username é obrigatório!')
      .transform((username) => {
        return username.trim()
      }),
    name: z
      .string()
      .nonempty('O nome é obrigatório!')
      .transform((username) => {
        return username.trim()
      }),
    email: z
      .string()
      .nonempty('O email é obrigatório!')
      .email('O formato de email é inválido!')
      .transform((username) => {
        return username.trim()
      }),
    senha: z.string().nonempty('A senha é obrigatória!'),
    senhaConfirm: z.string().nonempty('A senha de confirmação é obrigatória!'),
  })
  .refine((data) => data.senha === data.senhaConfirm, {
    message: 'As Senhas não conferem',
    path: ['senhaConfirm'],
  })

type CadastroFormData = z.infer<typeof cadastroFormSchema>

export default function FormCadastro() {
  const [toggleSenha, setToggleSenha] = useState(false)
  const [toggleSenhaConfirm, setToggleSenhaConfirm] = useState(false)
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroFormSchema),
  })

  function cadastroUser(data: any) {
    console.log(data)
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
        onSubmit={handleSubmit(cadastroUser)}
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
              type="text"
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
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
              type="text"
              {...register('name')}
              autoComplete="off"
            />
            {errors.name && (
              <span className="text-sm text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label htmlFor="senha" className="block font-medium leading-6">
                Senha
              </label>
              <div className="text-sm">
                <a
                  href="#"
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
              id="senha"
              className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
              type={toggleSenha ? 'text' : 'password'}
              {...register('senha')}
              autoComplete="off"
            />
            {errors.senha && (
              <span className="text-sm text-red-500">
                {errors.senha.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="senhaConfirm"
                className="block font-medium leading-6"
              >
                Senha de Confirmação
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-light-200 dark:text-dark-100 cursor-pointer"
                  onClick={() =>
                    setToggleSenhaConfirm(
                      (toggleSenhaConfirm) => !toggleSenhaConfirm,
                    )
                  }
                >
                  {toggleSenhaConfirm ? (
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
              id="senhaConfirm"
              className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
              type={toggleSenhaConfirm ? 'text' : 'password'}
              {...register('senhaConfirm')}
              autoComplete="off"
            />
            {errors.senhaConfirm && (
              <span className="text-sm text-red-500">
                {errors.senhaConfirm.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="border rounded dark:bg-zinc-700 dark:text-white dark:border-zinc-200 shadow-sm h-8 px-3"
            type="email"
            {...register('email')}
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <button
          className="bg-light-200 dark:bg-dark-100 rounded p-1 text-white"
          type="submit"
        >
          Cadastro
        </button>
      </form>
    </div>
  )
}
