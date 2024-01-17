'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import ThemeMode from './themeMode'

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = usePathname()

  return (
    <aside
      className={`bg-gray-50 dark:bg-gray-800 min-h-screen h-screen w-auto transition-all duration-2000 ${
        expanded ? 'w-[17.9rem]' : 'w-auto'
      }`}
    >
      <div
        className="p-4 flex cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 group relative"
        onClick={() => setExpanded((expanded) => !expanded)}
      >
        {expanded ? (
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
            className="lucide lucide-chevron-left-square"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m14 16-4-4 4-4" />
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
            className="lucide lucide-chevron-right-square"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m10 8 4 4-4 4" />
          </svg>
        )}
        {expanded ? <span className="ml-2">MarmiTrack</span> : ''}
        <span
          className={`absolute ${
            expanded ? 'top-3 left-60' : 'top-3 left-16'
          } scale-0 transition-all rounded w-40 text-center bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
        >
          Abri / Fechar - Menu
        </span>
      </div>
      <nav className="mt-4">
        <ul className="items-center justify-center">
          <li className="mb-2 group relative">
            <Link
              href="/"
              className={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/' ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
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
                className="lucide lucide-book-open-text ml-2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                <path d="M6 8h2" />
                <path d="M6 12h2" />
                <path d="M16 8h2" />
                <path d="M16 12h2" />
              </svg>
              {expanded ? <span className="ml-2">Cardápio</span> : ''}
              <span
                className={`absolute ${
                  expanded ? 'top-1 left-60' : 'top-1 left-16'
                } text-center scale-0 transition-all rounded w-28 bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              >
                Faça seu pedido
              </span>
            </Link>
          </li>
          <li className="mb-2 group relative">
            <div
              className={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/admin/cardapio' ||
                router === '/admin/mistura' ||
                router === '/admin/tamanho' ||
                router === '/admin/acompanhamento' ||
                router === '/admin/pedido' ||
                router === '/admin/restaurante'
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
            >
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
                className="lucide lucide-credit-card ml-2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              {expanded ? <span className="ml-2">Administração</span> : ''}
              <span
                className={`absolute ${
                  expanded ? 'top-0 left-60' : 'top-0 left-16'
                } text-center scale-0 transition-all rounded bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              >
                <div className="m-auto">
                  <Link href={'/login'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/mistura'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px]">Mistura</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/acompanhamento'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/acompanhamento'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Acompanhamento</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/restaurante'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/restaurante'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Restaurante</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/tamanho'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/tamanho'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Tamanho</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/pedido'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/pedido'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Pedido</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/cardapio'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/cardapio'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Cardápio</li>
                    </ul>
                  </Link>
                </div>
              </span>
            </div>
          </li>
          <li className="mb-2 group relative">
            <div
              className={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/admin/grupo' || router === '/admin/usuarios'
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
            >
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
                className="lucide lucide-book-lock ml-2"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
                <path d="M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20" />
                <rect width="8" height="5" x="12" y="6" rx="1" />
                <path d="M18 6V4a2 2 0 1 0-4 0v2" />
              </svg>
              {expanded ? <span className="ml-2">Contrle de Acesso</span> : ''}
              <span
                className={`absolute ${
                  expanded ? 'top-0 left-60' : 'top-0 left-16'
                } text-center scale-0 transition-all rounded bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              >
                <div className="m-auto">
                  <Link href={'/admin/grupos'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/grupos'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px]">Grupos</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/usuarios'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/usuarios'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Usuários</li>
                    </ul>
                  </Link>
                </div>
              </span>
            </div>
          </li>
          <li className="mb-2 group relative">
            <div
              className={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/admin/perfil' || router === '/admin/meuspedidos'
                  ? 'bg-gray-200 dark:bg-gray-700'
                  : ''
              }`}
            >
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
                className="lucide lucide-user-round ml-2"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
              {expanded ? <span className="ml-2">Usuário</span> : ''}
              <span
                className={`absolute ${
                  expanded ? 'top-0 left-60' : 'top-0 left-16'
                } text-center scale-0 transition-all rounded bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              >
                <div className="m-auto">
                  <Link href={'/admin/perfi'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/perfil'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px]">Perfil</li>
                    </ul>
                  </Link>
                  <Link href={'/admin/meuspedidos'}>
                    <ul
                      className={`hover:bg-gray-100 rounded dark:hover:bg-gray-700 ${
                        router === '/admin/meuspedidos'
                          ? 'bg-gray-100 dark:bg-gray-700'
                          : ''
                      }`}
                    >
                      <li className="p-2 text-[16px] ">Meus Pedidos</li>
                    </ul>
                  </Link>
                </div>
              </span>
            </div>
          </li>
          <li className="mb-2 group relative">
            {theme === 'dark' ? (
              <ThemeMode
                type={'a'}
                themeProps={theme}
                setThemeProps={setTheme}
                styleType={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
                styleSvg={`ml-2`}
                tooltip={true}
                expanded={expanded}
                tooltipText={`Light Mode`}
                tooltipStyle={`absolute ${
                  expanded ? 'top-1 left-60' : 'top-1 left-16'
                } text-center scale-0 transition-all rounded w-28 bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              />
            ) : (
              <ThemeMode
                type={'a'}
                themeProps={theme}
                setThemeProps={setTheme}
                styleType={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer`}
                styleSvg={`ml-2`}
                tooltip={true}
                expanded={expanded}
                tooltipText={`Dark Mode`}
                tooltipStyle={`absolute ${
                  expanded ? 'top-1 left-60' : 'top-1 left-16'
                } text-center scale-0 transition-all rounded w-28 bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              />
            )}
          </li>
          <li className="mb-2 group relative">
            <Link
              href="/sair"
              className={`p-2 flex hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/sair' ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
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
                className="lucide lucide-log-out ml-2"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
              {expanded ? <span className="ml-2">Sair</span> : ''}
              <span
                className={`absolute ${
                  expanded ? 'top-1 left-60' : 'top-1 left-16'
                } text-center scale-0 transition-all rounded w-28 bg-slate-200 dark:bg-gray-600 p-2 text-xs group-hover:scale-100`}
              >
                Sair
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
