import {IconType} from 'react-icons'
import Link from 'next/link'
import {twMerge} from 'tailwind-merge'

interface SidebarItemProps {
    icon:IconType;
    label:string;
    active?:boolean;
    href:string;
}

const SidebarItem = ({icon:Icon,label,active,href}:SidebarItemProps) => {
  return (
    <Link className={twMerge(`
        flex
        flex-row
        items-center
        gap-x-2
        text-neutral-400
        hover:text-white
        transition
    `,active && 'text-white')} href={href}>
            <Icon size={22} color='white'/>
            <p className='w-full font-medium'>{label}</p>
    </Link>
  )
}

export default SidebarItem