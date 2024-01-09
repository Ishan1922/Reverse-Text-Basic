import {Inter} from 'next/font/google'
import { Lusitana, Roboto_Serif } from 'next/font/google'

export const lusitana = Lusitana({
      subsets: ['latin'], 
      weight: ['700', '400']
});
export const inter = Inter({subsets: ['latin']});
export const roboto_serif = Roboto_Serif({
      subsets: ['latin'],
      weight: ['600']
})