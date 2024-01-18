import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const database = [
  {
    id: 1,
    name: 'Vira-Lata',
    mixes: [
      {
        id: 110,
        name: 'Mix 1',
        sizes: [
          { id: 111, name: 'Pequeno', price: 10.0 },
          { id: 112, name: 'Médio', price: 15.0 },
          { id: 113, name: 'Grande', price: 20.0 },
        ],
        sides: [
          { id: 114, name: 'Arroz', optional: false },
          { id: 115, name: 'Feijão', optional: false },
          { id: 116, name: 'Batata Frita', optional: true },
          { id: 117, name: 'Salada', optional: true },
        ],
      },
      {
        id: 120,
        name: 'Mix 2',
        sizes: [
          { id: 121, name: 'Pequeno', price: 12.0 },
          { id: 122, name: 'Médio', price: 17.0 },
          { id: 123, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 124, name: 'Arroz', optional: false },
          { id: 125, name: 'Feijão', optional: true },
          { id: 126, name: 'Batata Frita', optional: true },
          { id: 127, name: 'Salada', optional: true },
        ],
      },
      {
        id: 130,
        name: 'Mix 2',
        sizes: [
          { id: 131, name: 'Pequeno', price: 12.0 },
          { id: 132, name: 'Médio', price: 17.0 },
          { id: 133, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 134, name: 'Arroz', optional: false },
          { id: 135, name: 'Feijão', optional: true },
          { id: 136, name: 'Batata Frita', optional: true },
          { id: 137, name: 'Salada', optional: true },
        ],
      },
      {
        id: 140,
        name: 'Mix 2',
        sizes: [
          { id: 141, name: 'Pequeno', price: 12.0 },
          { id: 142, name: 'Médio', price: 17.0 },
          { id: 143, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 144, name: 'Arroz', optional: false },
          { id: 145, name: 'Feijão', optional: true },
          { id: 146, name: 'Batata Frita', optional: true },
          { id: 147, name: 'Salada', optional: true },
        ],
      },
      {
        id: 150,
        name: 'Mix 2',
        sizes: [
          { id: 151, name: 'Pequeno', price: 12.0 },
          { id: 152, name: 'Médio', price: 17.0 },
          { id: 153, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 154, name: 'Arroz', optional: false },
          { id: 155, name: 'Feijão', optional: true },
          { id: 156, name: 'Batata Frita', optional: true },
          { id: 157, name: 'Salada', optional: true },
        ],
      },
      {
        id: 160,
        name: 'Mix 2',
        sizes: [
          { id: 161, name: 'Pequeno', price: 12.0 },
          { id: 162, name: 'Médio', price: 17.0 },
          { id: 163, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 164, name: 'Arroz', optional: false },
          { id: 165, name: 'Feijão', optional: true },
          { id: 166, name: 'Batata Frita', optional: true },
          { id: 167, name: 'Salada', optional: true },
        ],
      },
      // Adicione mais misturas conforme necessário
    ],
  },
  {
    id: 2,
    name: 'Serafim',
    mixes: [
      {
        id: 210,
        name: 'Mix 3',
        sizes: [
          { id: 211, name: 'Pequeno', price: 10.0 },
          { id: 212, name: 'Médio', price: 15.0 },
          { id: 213, name: 'Grande', price: 20.0 },
        ],
        sides: [
          { id: 214, name: 'Arroz', optional: false },
          { id: 215, name: 'Feijão', optional: false },
          { id: 216, name: 'Batata Frita', optional: true },
          { id: 217, name: 'Salada', optional: true },
        ],
      },
      {
        id: 220,
        name: 'Mix 4',
        sizes: [
          { id: 221, name: 'Pequeno', price: 12.0 },
          { id: 222, name: 'Médio', price: 17.0 },
          { id: 223, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 224, name: 'Arroz', optional: false },
          { id: 225, name: 'Feijão', optional: true },
          { id: 226, name: 'Batata Frita', optional: true },
          {
            id: 227,
            name: 'Salada com sal, vinagre e pimenta',
            optional: true,
          },
        ],
      },
      {
        id: 230,
        name: 'Mix 1',
        sizes: [
          { id: 231, name: 'Pequeno', price: 10.0 },
          { id: 232, name: 'Médio', price: 15.0 },
          { id: 233, name: 'Grande', price: 20.0 },
        ],
        sides: [
          { id: 234, name: 'Arroz', optional: false },
          { id: 235, name: 'Feijão', optional: false },
          { id: 236, name: 'Batata Frita', optional: true },
          { id: 237, name: 'Salada', optional: true },
        ],
      },
      {
        id: 240,
        name: 'Mix 2',
        sizes: [
          { id: 241, name: 'Pequeno', price: 12.0 },
          { id: 242, name: 'Médio', price: 17.0 },
          { id: 243, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 244, name: 'Arroz', optional: false },
          { id: 245, name: 'Feijão', optional: true },
          { id: 246, name: 'Batata Frita', optional: true },
          { id: 247, name: 'Salada', optional: true },
        ],
      },
      {
        id: 250,
        name: 'Mix 2',
        sizes: [
          { id: 251, name: 'Pequeno', price: 12.0 },
          { id: 252, name: 'Médio', price: 17.0 },
          { id: 253, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 254, name: 'Arroz', optional: false },
          { id: 255, name: 'Feijão', optional: true },
          { id: 256, name: 'Batata Frita', optional: true },
          { id: 257, name: 'Salada', optional: true },
        ],
      },
      {
        id: 260,
        name: 'Mix 2',
        sizes: [
          { id: 261, name: 'Pequeno', price: 12.0 },
          { id: 262, name: 'Médio', price: 17.0 },
          { id: 263, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 264, name: 'Arroz', optional: false },
          { id: 265, name: 'Feijão', optional: true },
          { id: 266, name: 'Batata Frita', optional: true },
          { id: 267, name: 'Salada', optional: true },
        ],
      },
      {
        id: 270,
        name: 'Mix 2',
        sizes: [
          { id: 271, name: 'Pequeno', price: 12.0 },
          { id: 272, name: 'Médio', price: 17.0 },
          { id: 273, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 274, name: 'Arroz', optional: false },
          { id: 275, name: 'Feijão', optional: true },
          { id: 276, name: 'Batata Frita', optional: true },
          { id: 277, name: 'Salada', optional: true },
        ],
      },
      {
        id: 280,
        name: 'Mix 2',
        sizes: [
          { id: 281, name: 'Pequeno', price: 12.0 },
          { id: 282, name: 'Médio', price: 17.0 },
          { id: 283, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 284, name: 'Arroz', optional: false },
          { id: 285, name: 'Feijão', optional: true },
          { id: 286, name: 'Batata Frita', optional: true },
          { id: 287, name: 'Salada', optional: true },
        ],
      },
      // Adicione mais misturas conforme necessário
    ],
  },
  {
    id: 3,
    name: 'Teste',
    mixes: [
      {
        id: 210,
        name: 'Mix 3',
        sizes: [
          { id: 211, name: 'Pequeno', price: 10.0 },
          { id: 212, name: 'Médio', price: 15.0 },
          { id: 213, name: 'Grande', price: 20.0 },
        ],
        sides: [
          { id: 214, name: 'Arroz', optional: false },
          { id: 215, name: 'Feijão', optional: false },
          { id: 216, name: 'Batata Frita', optional: true },
          { id: 217, name: 'Salada', optional: true },
        ],
      },
      {
        id: 220,
        name: 'Mix 4',
        sizes: [
          { id: 221, name: 'Pequeno', price: 12.0 },
          { id: 222, name: 'Médio', price: 17.0 },
          { id: 223, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 224, name: 'Arroz', optional: false },
          { id: 225, name: 'Feijão', optional: true },
          { id: 226, name: 'Batata Frita', optional: true },
          {
            id: 227,
            name: 'Salada com sal, vinagre e pimenta',
            optional: true,
          },
        ],
      },
      {
        id: 230,
        name: 'Mix 1',
        sizes: [
          { id: 231, name: 'Pequeno', price: 10.0 },
          { id: 232, name: 'Médio', price: 15.0 },
          { id: 233, name: 'Grande', price: 20.0 },
        ],
        sides: [
          { id: 234, name: 'Arroz', optional: false },
          { id: 235, name: 'Feijão', optional: false },
          { id: 236, name: 'Batata Frita', optional: true },
          { id: 237, name: 'Salada', optional: true },
        ],
      },
      {
        id: 240,
        name: 'Mix 2',
        sizes: [
          { id: 241, name: 'Pequeno', price: 12.0 },
          { id: 242, name: 'Médio', price: 17.0 },
          { id: 243, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 244, name: 'Arroz', optional: false },
          { id: 245, name: 'Feijão', optional: true },
          { id: 246, name: 'Batata Frita', optional: true },
          { id: 247, name: 'Salada', optional: true },
        ],
      },
      {
        id: 250,
        name: 'Mix 2',
        sizes: [
          { id: 251, name: 'Pequeno', price: 12.0 },
          { id: 252, name: 'Médio', price: 17.0 },
          { id: 253, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 254, name: 'Arroz', optional: false },
          { id: 255, name: 'Feijão', optional: true },
          { id: 256, name: 'Batata Frita', optional: true },
          { id: 257, name: 'Salada', optional: true },
        ],
      },
      {
        id: 260,
        name: 'Mix 2',
        sizes: [
          { id: 261, name: 'Pequeno', price: 12.0 },
          { id: 262, name: 'Médio', price: 17.0 },
          { id: 263, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 264, name: 'Arroz', optional: false },
          { id: 265, name: 'Feijão', optional: true },
          { id: 266, name: 'Batata Frita', optional: true },
          { id: 267, name: 'Salada', optional: true },
        ],
      },
      {
        id: 270,
        name: 'Mix 2',
        sizes: [
          { id: 271, name: 'Pequeno', price: 12.0 },
          { id: 272, name: 'Médio', price: 17.0 },
          { id: 273, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 274, name: 'Arroz', optional: false },
          { id: 275, name: 'Feijão', optional: true },
          { id: 276, name: 'Batata Frita', optional: true },
          { id: 277, name: 'Salada', optional: true },
        ],
      },
      {
        id: 280,
        name: 'Mix 2',
        sizes: [
          { id: 281, name: 'Pequeno', price: 12.0 },
          { id: 282, name: 'Médio', price: 17.0 },
          { id: 283, name: 'Grande', price: 22.0 },
        ],
        sides: [
          { id: 284, name: 'Arroz', optional: false },
          { id: 285, name: 'Feijão', optional: true },
          { id: 286, name: 'Batata Frita', optional: true },
          { id: 287, name: 'Salada', optional: true },
        ],
      },
    ],
  },
]

const Acompanahmentos = [
  {
    acompanhamento: 'Feijoada',
    retirar: false,
  },
  {
    acompanhamento: 'Strogonoff',
    retirar: false,
  },
  {
    acompanhamento: 'Panqueca de carne',
    retirar: false,
  },
  {
    acompanhamento: 'Panqueca de frango',
    retirar: false,
  },
  {
    acompanhamento: 'Bife a milanesa',
    retirar: false,
  },
  {
    acompanhamento: 'Bife a parmegiana',
    retirar: false,
  },
  {
    acompanhamento: 'Bife de frango a milanesa',
    retirar: false,
  },
]

export default function Home() {
  return (
    <div className="w-full max-w-full mt-12 md:mt-0 lg:mt-0">
      <span className="flex mb-0 rounded-t bg-slate-100 dark:bg-slate-800 p-1 justify-center text-center">
        Restaurantes:
      </span>
      <Tabs defaultValue={database[0].name} className="">
        <TabsList
          loop={true}
          className="flex space-x-2 border-0 h-auto rounded-tl-none rounded-tr-none rounded-b"
        >
          <div className="">
            {database.map((restaurant) => (
              <TabsTrigger
                key={restaurant.id}
                value={restaurant.name}
                className="hover:bg-slate-200 m-1 dark:hover:bg-slate-900"
              >
                {restaurant.name}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        <div className="mt-4">
          {database.map((restaurant) => (
            <TabsContent
              key={restaurant.id}
              value={restaurant.name}
              className=""
            >
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {restaurant.mixes.map((mix) => (
                  <Card
                    key={mix.id}
                    className="w-auto text-xs hover:bg-neutral-100 hover:dark:bg-slate-900"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{mix.name}</CardTitle>
                      <CardDescription className="text-xs">
                        Descrição da mistura:
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="">
                      <p className="text-center justify-center">Preços:</p>
                      <ul>
                        {mix.sizes.map((size) => (
                          <div key={size.id}>
                            <div className="flex items-center justify-between">
                              <li className="mt-1 mb-1">
                                {size.name}: R${size.price}
                              </li>
                            </div>
                            <Separator className="" />
                          </div>
                        ))}
                      </ul>
                      <br />
                      <p className="text-center justify-center">
                        Acompanhamentos:
                      </p>
                      <ul>
                        {mix.sides.map((side) => (
                          <div key={side.id}>
                            <div className="flex items-center justify-between">
                              <li className="mt-1 mb-1">
                                {side.name} {side.optional ? '(Opcional)' : ''}
                              </li>
                            </div>
                            <Separator className="" />
                          </div>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Dialog>
                        <DialogTrigger asChild className="w-full">
                          <Button type="button" className="h-8">
                            Fazer pedido
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="top-36">
                          <DialogHeader>
                            <DialogTitle>
                              Faça seu pedido, mistura selecionada: {mix.name}.
                            </DialogTitle>
                            <DialogDescription className="grid grid-cols-1 w-full justify-center text-center"></DialogDescription>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button">Cancelar</Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button type="button" variant="destructive">
                                  Enviar
                                </Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
