# Como ejecutar el proyecto
- Para poder visualizar el proyecto, lo primero es instalar las dependecnias y paquetes de node utilizando `npm i` en la terminar dentro del proyecto.
- Posterior a la instalación de los paquetes y recursos, hay que ejecutar el servidor utilizando `npm run dev` el cual abrira el servidor expuesto en el puerto `:4321`.
- Como sonsecuente, una de las funciones se ve afectada por ejecutar en local:
```
---
const { username } = Astro.params;
//Usar para desarrollo
//const profileUrl = `http://localhost:4321/${username}`;
//Usar para produccion
const profileUrl = `https://linktree-profiles.netlify.app/${username}`;
---
```
Como se puede observar, las rutas para poder compartir los perfiles están destinadas por una constante, para hacer útil esta funcion, hay que ajustar según los requerimientos, por lo que por defecto está en produccion para que se pueda visualizar sin problemas en la URL.
- Visualizacion en produccion:
- El proyecto está desplegado en Netlify, por lo que está adaptado para que funcione sin problemas. Se puede consultar en la siguiente URl (https://linktree-profiles.netlify.app/juan_flores).
Usuarios disponibles:
- Es posible cambiar a los usuarios para explorar lo que contiene cada uno, como extra a estos perfiles, se pueden encontrar un par de perfiles cotilleando un poco la web:
- /juan_flores
- /dan_reynolds
- /cyberpunk_2077
- `linktree-profiles.netlify.app/`
Espero se disfrute y sea de su agrado, ya que me divertí bastante realizandola. Saludos!

## Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
