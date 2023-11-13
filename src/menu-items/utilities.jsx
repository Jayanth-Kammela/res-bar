import { Dashboard, Community, Products, Coupons, Vouchers, Sales, Customer, Reports, Offer } from '../assets/svgs';

const icons = {
  Dashboard,
  Community,
  Products,
  Coupons,
  Vouchers,
  Sales,
  Customer,
  Reports,
  Offer
};

const utilities = {
  id: 'utilities',
  // title: 'Utilities',
  type: 'group',
  children: [
    {
      id: '1',
      title: 'Dashboard',
      type: 'item',
      url: '/',
      icon: icons.Dashboard
    },
    {
      id: '2',
      title: 'Community Approval',
      type: 'item',
      url: '/',
      icon: icons.Community
    },
    {
      id: '3',
      title: 'Products',
      type: 'item',
      url: '/',
      icon: icons.Products
    },
    {
      id: '4',
      title: 'Coupons',
      type: 'item',
      url: '/',
      icon: icons.Coupons
    },
    {
      id: '5',
      title: 'Vouchers',
      type: 'item',
      url: '/',
      icon: icons.Vouchers
    },
    {
      id: '6',
      title: 'Sales',
      type: 'item',
      url: '/',
      icon: icons.Sales
    },
    {
      id: '7',
      title: 'Customer Details',
      type: 'item',
      url: '/',
      icon: icons.Customer
    },
    {
      id: '8',
      title: 'Reports & Analysis',
      type: 'item',
      url: '/',
      icon: icons.Reports
    },
    {
      id: '9',
      title: 'Birthday Special Offer',
      type: 'item',
      url: '/',
      icon: icons.Offer
    },
  ]
};

export default utilities;
