import Home from './Home';
import Admin from './Admin';
import Device from './Device';
import Devices from './Devices';
import DeviceTypes from './DeviceTypes';
import Controls from './Controls';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    routes: [
      { path: '/:device-name',
        component: Device
      }
    ]
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
      { path: '/admin/device-types',
        component: DeviceTypes,
        name: 'Device Types'
      },
      { path: '/admin/controls',
        component: Controls,
        name: 'Controls'
      }
    ]
  }
];

export default routes;
