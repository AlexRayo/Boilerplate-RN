const config = {
    screens: {
      ResetPassword: {
        path: "resetpassword/:id",
        parse: {
          id: (id:string) => `${id}`,
        },
      },
    },
  };
  
  const linking = {
    prefixes: ["fluentius://app"],
    config,
  };
  
  export default linking;