import './configure-debug'
import {configSet} from '@evoke-me/config'

configSet(`API`, import.meta.env.VITE_API)
