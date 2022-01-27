export interface cartData {
    heading: string;
    description: string;
    path: string;
  }
  
  export const carts: cartData[] = [
    {
      heading: 'View Clients',
      description: 'View List of clients',
      path: '/clients',
    },
    {
      heading: 'Create Classes',
      description: 'Create new classes',
      path: '/create',
    },
    {
      heading: 'Buy Membership Card',
      description: 'Client buys new membership card',
      path: '/buy',
    },
    {
      heading: 'Cancel Memebership',
      description: 'Client cancels membership',
      path: '/cancel',
    },
    {
      heading: 'Book a gym room',
      description: 'Client books a gym room',
      path: '/book',
    },
    {
      heading: 'Generate Report',
      description: 'Manager Generates Report',
      path: '/report'
    },
  ];