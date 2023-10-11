// ** Icon imports
import Table from 'mdi-material-ui/Table'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/dashboard'
    },

    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },

    {
      sectionTitle: 'Pages'
    },
     {
      title: 'Payment Requests',
      icon: Table,
      path: '/admin-payments-requests'
    },
    {
      title: 'Players',
      icon: Table,
      path: '/player'
    },
    {
      title: 'Organizers',
      icon: Table,
      path: '/admin-organizers'
    }
    ,
    {
      title: 'Tounament',
      icon: Table,
      path: '/tournament'
    },{
      title: 'Games',
      icon: Table,
      path: '/games'
    },
    {
      title: 'Coins',
      icon: Table,
      path: '/admin-coins'
    },



  ]
}

export default navigation
