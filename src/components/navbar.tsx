'use client'

import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeMode from './themeMode'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const router = usePathname()
  return (
    <nav className={`bg-gray-50 dark:bg-gray-800 fixed w-full mt-[-6px]`}>
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center group relative p-1">
          <button
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            type="button"
            className="focus:outline-none ml-1 me-1 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {showMenu ? (
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
                className="lucide lucide-align-center"
              >
                <line x1="21" x2="3" y1="6" y2="6" />
                <line x1="17" x2="7" y1="12" y2="12" />
                <line x1="19" x2="5" y1="18" y2="18" />
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
                className="lucide lucide-align-justify"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            )}
          </button>
          <span
            className={`absolute top-11 text-center scale-0 transition-all rounded w-40 bg-slate-200 dark:bg-gray-600 p-2 text-xs ${
              showMenu === false ? 'group-hover:scale-100' : ''
            } `}
          >
            Abrir / Fechar - Menu
          </span>
        </div>
        <div className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
          <Link
            className="me-1 ml-1"
            onClick={() => {
              setShowMenu(false)
            }}
            href={'/'}
          >
            MarmiTrack
          </Link>
        </div>
        <div className="p-1 me-1 rounded">
          {theme === 'dark' ? (
            <ThemeMode
              type={'btn'}
              themeProps={theme}
              setThemeProps={setTheme}
              styleType={`me-1 ml-1 p-1 group relative rounded hover:bg-gray-200 dark:hover:bg-gray-700`}
              styleSvg={``}
              tooltip={true}
              expanded={false}
              tooltipText={`Light Mode`}
              tooltipStyle={`absolute top-10 right-0 w-24 text-center scale-0 transition-all rounded bg-slate-200 dark:bg-gray-600 p-2 text-xs ${
                showMenu === false ? 'group-hover:scale-95' : ''
              }`}
            />
          ) : (
            <ThemeMode
              type={'btn'}
              themeProps={theme}
              setThemeProps={setTheme}
              styleType={`me-1 ml-1 p-1 group relative rounded hover:bg-gray-200 dark:hover:bg-gray-700`}
              styleSvg={``}
              tooltip={true}
              expanded={false}
              tooltipText={`Dark Mode`}
              tooltipStyle={`absolute top-10 right-0 w-24 text-center scale-0 transition-all rounded bg-slate-200 dark:bg-gray-600 p-2 text-xs ${
                showMenu === false ? 'group-hover:scale-95' : ''
              }`}
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div className="fixed flex w-full h-full">
          <div className="bg-gray-300 dark:bg-gray-900 w-full p-4">
            <Link
              href="/"
              className={`block p-1 pl-2 pe-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/' ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            >
              Cardápio
            </Link>
            <Separator className="" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="adm">
                <AccordionTrigger
                  className={`p-1 rounded  pl-2 pe-2 hover:no-underline hover:bg-gray-200 dark:hover:bg-gray-700 ${
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
                  Administração
                </AccordionTrigger>
                <AccordionContent className="p-1 text-center justify-center">
                  <ul>
                    <Separator className="" />
                    <li>
                      <Link
                        href="/admin/mistura"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/mistura'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Mistura
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/acompanhamento"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/acompanhamento'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Acompanhamento
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/restaurante"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/restaurante'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Restaurante
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/tamanho"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/tamanho'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Tamanho
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/pedido"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/pedido'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Pedido
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/cardapio"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/cardapio'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Cardápio
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="control">
                <AccordionTrigger
                  className={`p-1 rounded pl-2 pe-2 hover:no-underline hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    router === '/admin/grupos' || router === '/admin/usuarios'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : ''
                  }`}
                >
                  Controle de Acesso
                </AccordionTrigger>
                <AccordionContent className="p-1 text-center justify-center">
                  <ul>
                    <Separator className="" />
                    <li>
                      <Link
                        href="/admin/grupos"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/grupos'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Grupos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/admin/usuarios"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/admin/usuarios'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Usuários
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="user">
                <AccordionTrigger
                  className={`p-1 rounded pl-2 pe-2 hover:no-underline hover:bg-gray-200 dark:hover:bg-gray-700 ${
                    router === '/perfil' || router === '/meuspedidos'
                      ? 'bg-gray-200 dark:bg-gray-700'
                      : ''
                  }`}
                >
                  Usuário
                </AccordionTrigger>
                <AccordionContent className="p-1 text-center justify-center">
                  <ul>
                    <Separator className="" />
                    <li>
                      <Link
                        href="/perfil"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/perfil'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Perfil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/meuspedidos"
                        className={`block mb-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                          router === '/meuspedidos'
                            ? 'bg-gray-200 dark:bg-gray-700'
                            : ''
                        }`}
                        onClick={() => {
                          setShowMenu(!showMenu)
                        }}
                      >
                        Meus Pedidos
                      </Link>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href="/sair"
              className={`block p-1 pl-2 pe-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 ${
                router === '/sair' ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
              onClick={() => {
                setShowMenu(!showMenu)
              }}
            >
              Sair
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
