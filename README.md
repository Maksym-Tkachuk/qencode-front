# Qencode

### Development Mode

To run the application in development mode, execute the following command:

```sh
yarn s
```

This command will automatically start the application in development mode.

### Production Mode

Before launching the application in production mode, you need to build the project. You can do this by following these steps:

- Build the Project

  Run the following command to build the project:

  ```sh
  yarn build
  ```

  This command will compile your application into a production-ready version, ready for deployment.

- Launch the Application

  After a successful build, execute the following command to start the application in production mode:

  ```sh
  yarn preview
  ```

  This command will launch your application in a production environment, ready for real-world usage.

## Navigation

Website location: `https://main--qencode-front.netlify.app/`

- `/` : This page allows users to log in to their accounts;
- `/forgot-password` : Users can reset their password through this page if they have forgotten it;
- `/new-password` : This page allows users to set a new password after resetting it.
