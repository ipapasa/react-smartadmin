export default {
  path: 'services',
  component: require('../../components/common/Layout').default,

  childRoutes: [
    {
      path: 'distributions',
      getComponent(nextState, cb){
        System.import('../../components/services/distributions').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]

};
