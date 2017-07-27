import Home from './Home';
import Admin from './Admin';
import Device from './Device';
import Devices from './admin/Devices';
import DeviceTypes from './admin/DeviceTypes';
import Controls from './admin/Controls';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: true
  },
  {
    path: '/admin',
    component: Admin,
    name: 'Admin',
    routes: [
      {
        path: '/admin/devices',
        component: Devices,
        name: 'Devices'
      },
      {
        path: '/admin/device-types',
        component: DeviceTypes,
        name: 'Device Types'
      },
      {
        path: '/admin/controls',
        component: Controls,
        name: 'Controls'
      }
    ]
  },
  {
    path: '/:name',
    component: Device
  }
];

export default routes;
