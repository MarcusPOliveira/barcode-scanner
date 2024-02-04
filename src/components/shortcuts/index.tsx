import { ScanBarcode, ListEnd, CheckCircle, BarChart3 } from 'lucide-react'

import { ShortcurtCard } from './shortcut_card'

const shortcutsOptions = [
  {
    icon: ScanBarcode,
    iconColor: 'text-indigo-600',
    backgroundColor: 'bg-indigo-300',
    title: 'Escanear agora',
    counterLabel: 'Escaneados 423',
    pathname: '/escanear',
  },
  {
    icon: ListEnd,
    iconColor: 'text-amber-600',
    backgroundColor: 'bg-amber-300',
    title: 'Lista de produtos',
    counterLabel: 'Adicionados 125',
    pathname: '/lista-de-produtos',
  },
  {
    icon: CheckCircle,
    iconColor: 'text-emerald-600',
    backgroundColor: 'bg-emerald-300',
    title: 'Finalizados',
    counterLabel: 'Finalizados 423',
    pathname: '/finalizados',
  },
  {
    icon: BarChart3,
    iconColor: 'text-cyan-600',
    backgroundColor: 'bg-cyan-300',
    title: 'Estatísticas',
    counterLabel: 'Escaneados 423',
    pathname: '/estatisticas',
  },
]

export const Shortcuts = () => {
  return (
    <section className="py-10">
      <p className="text-xl font-medium">Meus Atalhos</p>
      <div className="mt-5 flex w-full  flex-wrap items-center justify-center gap-5">
        {shortcutsOptions.map((option, index) => (
          <ShortcurtCard
            key={index}
            icon={option.icon}
            iconColor={option.iconColor}
            backgroundColor={option.backgroundColor}
            title={option.title}
            counterLabel={option.counterLabel}
            pathname={option.pathname}
          />
        ))}
      </div>
    </section>
  )
}
